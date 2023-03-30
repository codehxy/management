import React, { ChangeEvent, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./login.module.scss"
import initLoginBg from './init';
import { Button, Input, Space, message } from 'antd';
import "./login.less"
import { useState } from 'react';
import { CaptchaAPI, LoginAPI } from "@/request/api"

function Login() {

    let navigate = useNavigate();

    useEffect(() => {
        initLoginBg();
        window.onresize = function () { initLoginBg() }
        getCaptchaImg();
    }, [])

    const [usernameVal, setUsernameVal] = useState("");
    const [passwordVal, setPasswordVal] = useState("");
    const [captchaVal, setCaptchaVal] = useState("");
    const [captchaImg, setCaptchaImg] = useState("");


    const usernameOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUsernameVal(e.target.value);
    }
    const passwordOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordVal(e.target.value);
    }
    const captchaOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCaptchaVal(e.target.value);
    }

    //获取登录信息
    const goToLogin = async () => {
        console.log(usernameVal, passwordVal, captchaVal);
        if (!usernameVal.trim() || !passwordVal.trim()) {
            message.warning("请输入完整信息!");
            return;
        }

        let loginAPIRes = await LoginAPI({
            username: usernameVal,
            password: passwordVal,
            code: captchaVal,
            uuid: localStorage.getItem("uuid") as string
        })

        if (loginAPIRes.code === 200) {
            message.success("登录成功!")
            localStorage.setItem("management-token", loginAPIRes.token);
            navigate("/page1");
            localStorage.removeItem("uuid")
        }

        if (loginAPIRes.code !== 200) {
            message.warning("用户名或密码错误!");
        }

    }
    //获取图片
    const getCaptchaImg = async () => {
        // captchaAPI().then((res) => {
        //     console.log(res)
        // })
        let captchaAPIRes = await CaptchaAPI();
        console.log(captchaAPIRes)
        if (captchaAPIRes.code === 200) {
            setCaptchaImg("data:image/gif;base64," + captchaAPIRes.img);
            localStorage.setItem("uuid", captchaAPIRes.uuid);

        }
    }

    return (
        <div className={styles.loginPage}>
            {/* 存放背景 */}
            <canvas id="canvas" style={{ display: "block" }}></canvas>
            {/* 登录盒子 */}
            <div className={styles.loginBox + " loginbox"}>
                {/* 标题部分 */}
                <div className={styles.title}>
                    <h1>&nbsp;·&nbsp;通用后台系统</h1>
                    <p>Strive Everyday</p>
                </div>
                {/* 表单部分 */}
                <div className='form'>
                    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                        <Input placeholder="账户" onChange={usernameOnChange} />
                        <Input.Password placeholder="密码" onChange={passwordOnChange} />
                        <div className="captchaBox">
                            <Input placeholder="验证码" onChange={captchaOnChange} />
                            <div className="captchaImg" onClick={getCaptchaImg}>
                                <img height="34" src={captchaImg} alt='' ></img>
                            </div>
                        </div>
                        <Button type="primary" block onClick={goToLogin} >
                            登录
                        </Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default Login

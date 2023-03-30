import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Numstate from "../store/NumState/index"

function Page1() {
    const dispatch = useDispatch();

    const { num, sarr } = useSelector((state: RootState) => ({
        num: state.handlNum.num,
        sarr: state.handlArr.sarr
    }))


    const changeAdd = () => {
        dispatch({ type: "add3", val: 5 })
    }


    const changeAdd2 = () => {
        dispatch(Numstate.asyncActions.asyncAdd)
    }

    const changeArr = () => {
        dispatch({ type: "sarrpush", val: 2 })
    }



    return (
        <div>
            <p>我是page1页面内容</p>
            <p>{num}</p>
            <p>{sarr}</p>
            <button onClick={changeAdd}>同步按钮</button>
            <button onClick={changeAdd2}>异步按钮</button>
            <button onClick={changeArr}>按钮</button>
        </div>
    )
}

export default Page1

import React from 'react'
import styles from "./comp1.module.scss"
import { Button } from 'antd';
import { StepForwardOutlined } from "@ant-design/icons"

export default function Comp() {

    return (

        <div>
            <Button type="primary">我们的按钮</Button>
            <StepForwardOutlined />

        </div>
    )
}

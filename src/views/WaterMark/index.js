/*
 * @Author: zhanghao23
 * @LastEditors: zhanghao23
 * @Description: file content
 */
import React, {useState} from 'react'
import { Button } from 'antd'
import './style.css'


function WaterMark(props) {
    const [num, setNum] = useState(0)

    const a = {}
    console.log(Object.getOwnPropertyDescriptors(a));

    return (
        <div className="box">
            <div className="mask"></div>
            <p>num: {num}</p>
            <Button 
                onClick={() => {
                    setNum(num + 1)
                }}>增加</Button>
        </div>
    )
}

export default WaterMark
/*
 * @Author: zhanghao23
 * @LastEditors: zhanghao23
 * @Description: file content
 */
import React, {useEffect, useState} from 'react';
import {Button} from "antd";

const Hooks = () => {
    const [val, setVal] = useState(0);

    // useEffect(() => {
    //     setVal(val+1);
    //     console.log(val);
    //     setVal(val+1);
    //     console.log(val);
    //     setVal(val+1);
    //     console.log(val);
    //     setTimeout(() => {
    //         console.log(val);
    //         setVal(val+1);
    //         console.log(val);
    //         setVal(val+1);
    //         console.log(val);
    //     }, 0)
    // }, []);

    return (
        <Button onClick={(val) => {
            setVal(val = 1)
        }}>
            {val}
        </Button>
    )
};
 export default Hooks

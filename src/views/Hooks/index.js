/*
 * @Author: zhanghao23
 * @LastEditors  : zhanghao23
 * @Description: file content
 */
import React, {useEffect, useState, useRef, useContext} from 'react';
import {Button} from "antd";
// import Child from "./Child.js"
const colorContext = React.createContext("gray");
const fetchData = (id) => new Promise(resolve => {
    setTimeout(() => {
        resolve('已经从服务器拉取列表完毕' + id)
    }, 1000)
})

const Child = () => {
    const color = useContext(colorContext);
    return (
        <p>{color}</p>
    )
}

// 模拟componentDidUpdate
function useUpdate(fn) {
    // useRef 创建一个引用
    const ref = useRef(true);
    console.log(ref,'ref');
    useEffect(() => {
      if (ref.current) {
        ref.current = false;
      } else {
        fn();
      }
    });
}
const Hooks = () => {
    // const [count, setCount] = useState(0);
    const [originData, setOriginData] = useState({data: ''});

    // useEffect(() => {
    //     console.log('count 改变了 useEffect');
    //     setTimeout(() => {
    //         alert("count: " + count);
    //       }, 3000);
    //     // (async() => {
    //     //     const res = await fetchData(count)
    //     //     setOriginData({data: res})
    //     // })()
    // }, [count]);

    const count = useRef(0);

    const showCount = () => {
      alert("count: " + count.current);
    };
  
    const handleClick = number => {
      count.current = count.current + number;
      setTimeout(showCount, 3000);
    };

    useUpdate(() => {
        console.log('didUpdate');
    })

    useEffect(() => {
        return () => {
            console.log('组件要卸载了');
        }
    }, [])

    return (
        <div>
            <Button 
                onClick={() => handleClick(1)}
            >+</Button>
            {/* {count} */}
            <Button 
                onClick={() => handleClick(-1)}
            >-</Button>
            <p>{originData.data}</p>
            {/* <colorContext.Provider value={count}>
                color:
                <Child/>
            </colorContext.Provider> */}
        </div>
    )
};
 export default Hooks

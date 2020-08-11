import React, {useEffect, useState, useRef, useCallback} from 'react';
import {Button} from "antd";
import Big from 'big'

const useMouse = () => {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const fn = useCallback((e) => {
    console.log(e);
    setX(e.pageX)
    setY(e.pageY)
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', fn)
    return () => {
      console.log('remove');
      document.removeEventListener('mousemove', fn)
    }
  }, [])
  return {
    x, y
  }
}


const BigR = () => {
  const [count, setCount] = useState(0.1)
  const {x, y} = useMouse()
  const add = () => {
    console.log();
    setCount(new Big(count).plus(0.2).toString())
  }
  return (
    <div>
      <Button onClick={add}>+</Button>
      {count}
  <div>x: {x}, y: {y}</div>
    </div>
  )
}
export default BigR
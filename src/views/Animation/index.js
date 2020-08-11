import React from 'react'
import './style.css'
const Animation = (props) => {

  return (
    <div>
      <div className="box">中</div>
      <button onClick={() => {
        window.location.href = 'https://page-iorder.cpgroupcloud.com/costToolsDownload?percent=25&device-token=C8F80009-3541-4603-A12E-B8DCFA958A0F&from=singlemessage&isappinstalled=0'
      }}>go</button>
    </div>
  )
}

export default Animation
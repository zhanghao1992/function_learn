import React, {Component} from 'react'
import {Helmet} from 'react-helmet';
import './css/mindex.css'

class SkyWheel  extends Component {

  state = {
    maskVisible: true
  }
  componentDidMount() {
    
  }

  start = () => {
    console.log('抽奖')
    this.setState({maskVisible: true})
  }

  close = () => {
    this.setState({maskVisible: false})
  }

  render() {
    const {maskVisible} = this.state
    return (
      <div>
        <Helmet>
          <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
	        {/* <script src="js/zepot.js" type="text/javascript" charset="utf-8"></script> */}
        </Helmet>

        <div className="box" id="box">
        <div className="content">
          <div className="lun">
            <img alt="加载错误" src={require('./img/lun1.png')}/>
            <img alt="加载错误" onClick={this.start} src={require('./img/money.png')} className="down"/>
            <img alt="加载错误" onClick={this.start} src={require('./img/pc.png')} className="down"/>
            <img alt="加载错误" onClick={this.start} src={require('./img/fee.png')} className="down"/>
            <img alt="加载错误" onClick={this.start} src={require('./img/ll.png')} className="down"/>
          </div>
          <img alt="加载错误" src={require('./img/le2.png')} className="zs1"/>
          <img alt="加载错误" src={require('./img/luo.png')} className="zs2"/>
        </div>
        <img alt="加载错误" src={require('./img/star-shine.png')} className="star1"/>
        <img alt="加载错误" src={require('./img/star2.png')} className="star2"/>
        <img alt="加载错误" src={require('./img/flag1.png')} className="flag1"/>
        <img alt="加载错误" src={require('./img/flag1.png')} className="flag2"/>
        <img alt="加载错误" src={require('./img/cloud.png')} className="cloud"/>
        <img alt="加载错误" src={require('./img/ugly.png')} className="ugly"/>
      </div>
      {maskVisible && <div id="mask">
        <div className="cImg_box ktop">
          <i><img alt="加载错误" src={require('./img/ribbon.png')} className="kscale"/></i>
          <img alt="加载错误" src={require("./img/header.png")}/>
          <div className="cImg_box_content">
            <p>恭喜你获得</p>
            <div className="imageBgq">
              <img alt="加载错误" src="" id="spimg"/>
            </div>
            <img alt="加载错误" src={require('./img/download.png')} id="downs"/>
          </div>
          <span onClick={this.close} id="close">
            x
          </span>
        </div>
      </div>}
      </div>
    )
  }
}

export default SkyWheel
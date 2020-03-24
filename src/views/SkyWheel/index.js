import React, {Component} from 'react'
import {Helmet} from 'react-helmet';
import './css/mindex.css'

class SkyWheel  extends Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <Helmet>
          <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
	        {/* <script src="js/zepot.js" type="text/javascript" charset="utf-8"></script> */}
        </Helmet>

        <div className="box" id="box">
        <div className="content">
          <div className="lun">
            <img src={require('./img/lun1.png')}/>
            <img src={require('./img/money.png')} className="down"/>
            <img src={require('./img/pc.png')} className="down"/>
            <img src={require('./img/fee.png')} className="down"/>
            <img src={require('./img/ll.png')} className="down"/>
          </div>
          <img src={require('./img/le2.png')} className="zs1"/>
          <img src={require('./img/luo.png')} className="zs2"/>
        </div>
        <img src={require('./img/star-shine.png')} className="star1"/>
        <img src={require('./img/star2.png')} className="star2"/>
        <img src={require('./img/flag1.png')} className="flag1"/>
        <img src={require('./img/flag1.png')} className="flag2"/>
        <img src={require('./img/cloud.png')} className="cloud"/>
        <img src={require('./img/ugly.png')} className="ugly"/>
      </div>
		<div id="mask">
			<div className="cImg_box">
				<i><img src="img/ribbon.png"/></i>
				<img src="img/header.png"/>
				<div className="cImg_box_content">
					<p>恭喜你获得</p>
					<div className="imageBgq">
						<img src="" id="spimg"/>
					</div>
					<img src="img/download.png" id="downs"/>
				</div>
				<span id="close">
					x
				</span>
			</div>
		</div>
      </div>
    )
  }
}

export default SkyWheel
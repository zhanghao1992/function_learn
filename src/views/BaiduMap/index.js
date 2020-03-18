import React, {Component} from 'react'
import {connect} from 'dva';
import {Helmet} from 'react-helmet';
import BMap from 'BMap'
const mapStateToProps = (state) => {
  const { app, loading } = state
  return {
    app,
    loading
  }
}
const mapDispatchToProps = (dispatch) => ({
    getAllCities: () => dispatch({ type: 'app/save' })
})

@connect(mapStateToProps, mapDispatchToProps)
class BaiDuMap  extends Component {
  constructor(props) {
    super(props)
    this.state = {
    
    }
  }

  componentDidMount() {
      var map = new BMap.Map('allmap');            // 创建Map实例
      var point = new BMap.Point(116.404, 39.915); // 创建点坐标
      map.centerAndZoom(point, 15);                 
      map.enableScrollWheelZoom(); 
      paintRandom()
      map.addEventListener('dragend', function(e) {
        // 删除覆盖物
        map.clearOverlays();
        console.log(e);
        // 添加新的覆盖物
        paintRandom()
      })                //启用滚轮放大缩小

      // var marker = new BMap.Marker(point);        // 创建标注    
      // map.addOverlay(marker);    

      function addMarker(point, index){  // 创建图标对象   
        var myIcon = new BMap.Icon("markers.png", new BMap.Size(23, 25), {    
            // 指定定位位置。   
            // 当标注显示在地图上时，其所指向的地理位置距离图标左上    
            // 角各偏移10像素和25像素。您可以看到在本例中该位置即是   
            // 图标中央下端的尖角位置。    
            anchor: new BMap.Size(10, 25),    
            // 设置图片偏移。   
            // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您   
            // 需要指定大图的偏移位置，此做法与css sprites技术类似。    
            imageOffset: new BMap.Size(0, 0 - index * 25)   // 设置图片偏移    
        });      
        // 创建标注对象并添加到地图   
        var marker = new BMap.Marker(point);   

        var opts = {
          width : 200,     // 信息窗口宽度
          height: 100,     // 信息窗口高度
          title : "海底捞王府井店" , // 信息窗口标题
          enableMessage:true,//设置允许信息窗发送短息
          message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
        }
        var infoWindow = new BMap.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货八层", opts);
        marker.addEventListener("click", function(){          
          map.openInfoWindow(infoWindow,point); //开启信息窗口
        });

        map.addOverlay(marker);    
      }    
    // 随机向地图添加10个标注    
    function paintRandom() {
      var bounds = map.getBounds();
      var sw = bounds.getSouthWest();
      var ne = bounds.getNorthEast();
      // lng 经度 (宽)
      var lngSpan = Math.abs(sw.lng - ne.lng);
      // lat 纬度 （高）
      var latSpan = Math.abs(ne.lat - sw.lat);
      console.log(lngSpan, latSpan);
      for (var i = 0; i < 10; i ++) {
        var point = new BMap.Point(sw.lng + lngSpan * (Math.random() * 0.7), ne.lat - latSpan * (Math.random() * 0.7));
        addMarker(point);
      }
    }

  }

  render() {
    return(
      <div>
        <Helmet>
          <meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
        </Helmet>
       <div id='allmap' style={{width: '100%',height: '100vh'}}></div>
      </div>
    )
  }
}

export default BaiDuMap
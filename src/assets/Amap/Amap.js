/*
 * 异步创建script标签 
 */
export default function MapLoader () { 
    return new Promise((resolve, reject) => {
      if (window.AMap) {
        resolve(window.AMap)
      } else {
        var script = document.createElement('script')
        script.type = 'text/javascript'
        script.async = false
        script.src = 'https://webapi.amap.com/maps?v=1.4.15&key=cf623a5308b7d477ac7b11b04599bd0b&plugin=AMap.Driving&plugin=AMap.TileLayer&plugin=Map3D,AMap.DistrictSearch&plugin=AMap.PolyEditor&plugin=AMap.PlaceSearch,AMap.InfoWindow&plugin=AMap.DistrictSearch&callback=initAMap'
        script.onerror = reject
        document.head.appendChild(script)
      }
      window.initAMap = () => {
        resolve(window.AMap)
      }
    })
  }
//   <script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=cf623a5308b7d477ac7b11b04599bd0b&plugin=AMap.Driving&plugin=AMap.PolyEditor&plugin=AMap.PlaceSearch,AMap.InfoWindow&plugin=AMap.DistrictSearch&callback=onApiLoaded"></script>
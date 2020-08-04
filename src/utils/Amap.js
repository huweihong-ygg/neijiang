// export default function MapLoader () {   // <-- 原作者这里使用的是module.exports
//     return new Promise((resolve, reject) => {
//       if (window.AMap) {
//         resolve(window.AMap)
//       } else {
//         var script = document.createElement('script')
//         script.type = 'text/javascript'
//         script.async = true
//         // script.src = 'https://webapi.amap.com/maps?v=2.0&key=cf623a5308b7d477ac7b11b04599bd0b&plugin=Map3D,AMap.DistrictSearch&plugin=AMap.Object3DLayer'
//         script.src = 'https://webapi.amap.com/maps?v=1.4.15&key=cf623a5308b7d477ac7b11b04599bd0b&plugin=AMap.Driving&plugin=AMap.Object3DLayer&plugin=AMap.PolyEditor&callback=onApiLoaded&plugin=AMap.PlaceSearch,AMap.InfoWindow&plugin=AMap.DistrictSearch&plugin=AMap.Object3DLayer&plugin=AMap.PolylineEditor&plugin=AMap.PolyEditor&plugin=AMap.DrivingPolicy&callback=initAMap'
//         script.onerror = reject
//         document.head.appendChild(script)
//       }
//       window.initAMap = () => {
//         resolve(window.AMap)
//       }
//     })
//   }
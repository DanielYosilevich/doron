import React from 'react'
import routes from './routes'
import {withRouter} from  'react-router-dom'
// import GeoMapDemo from './components/GeoMapDemo'
// import GeoMapDemoTwo from './components/GeoMapDemoTwo'

function App(props) {
//   return (
//     <div className="App">
//       {/* <h2>Hello React-Asp!</h2> */}
//       {/* <GeoMapDemo /> */}
//       {/* <GeoMapDemoTwo /> */}
//       {routes}
//     </div>
//   );
// }
const handleClick = () => {
  window.console.log('fffff', props)
  props.history.push('/geo/?data=%5B%7B"name"%3A"Kfar%20Saba"%2C"lat"%3A32.175%2C"lng"%3A34.90694%7D%2C%7B"name"%3A"Paris"%2C"lat"%3A48.864%2C"lng"%3A2.349%7D%5D')
}
return (
  <div className="App">
    <h2>Hello React-Asp!</h2>
    <button onClick={handleClick}>Test</button>
    {/* <GeoMapDemo /> */}
    {/* <GeoMapDemoTwo /> */}
    {routes}
  </div>
);
}

export default withRouter(App);
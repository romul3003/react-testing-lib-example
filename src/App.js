/* eslint-disable no-magic-numbers */
// import { useEffect, useState } from 'react'

// const App = () => {
//   const [data, setData] = useState(null)
//   const [toggle, setToggle] = useState(false)
//   const [value, setValue] = useState('')

//   const onClick = () => setToggle(prev => !prev)

//   useEffect(() => {
//     setTimeout(() => {
//       setData({})
//     }, 100)
//   }, [])

//   return (
//     <div className="container">
//       <h1 data-testId="value-elem">{value}</h1>
//       {toggle === true && (<div data-testId="toggle-elem">toggle</div>)}
//       {data && (<div style={{ color: 'red' }}>data</div>)}
//       <h1>Hello world</h1>
//       <button
//         type="button"
//         data-testId="toggle-button"
//         onClick={onClick}
//       >
//         Click me
//       </button>
//       <input
//         type="text"
//         placeholder="input value..."
//         onChange={event => setValue(event.target.value)}
//       />
//     </div>
//   )
// }

import Navbar from './components/Navbar'
import AppRouter from './router/AppRouter'

const App = () => (
  <div className="container" data-testid="app">
    <Navbar />
    <AppRouter />
  </div>
)

export default App

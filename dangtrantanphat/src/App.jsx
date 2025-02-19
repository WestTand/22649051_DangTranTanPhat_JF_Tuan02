import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import Bai1 from './compoments/Bai1'
import Bai2 from './compoments/Bai2'
import Bai3 from './compoments/Bai3'
import Bai04 from './compoments/Bai04'


function App() {
  const [name, setName] = useState('')
  function handleChange(e) {
    setName(e.target.value)
  }
  function handleClick() {

  }
  return (
    <>
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai04></Bai04>
    </>
  )
}

export default App

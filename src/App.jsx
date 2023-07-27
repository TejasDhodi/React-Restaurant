import React from 'react'
import Home from './Routes/Home'
import Menu from './Routes/Menu.Jsx'
import Contact from './Routes/Contact'
import {Route, Routes} from 'react-router-dom'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/menu' element={<Menu />} />
      </Routes>
    </>
  )
}

export default App

import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Search from './pages/Search/Search'



const App = () => {
  const [searchTerm, setSearchTerm]= useState("")

  return (
    <Router>
    <div className='app'>
      <Routes>
        <Route path='/home' element={<Home query={setSearchTerm}/>}></Route>
        <Route path='/search'element={<Search />}></Route>
      </Routes>
      
    </div>
    <Footer/>
    </Router>

  )
}

export default App

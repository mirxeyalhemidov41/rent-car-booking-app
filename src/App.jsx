import { useState } from 'react'
import './App.css'
import { Header } from './pages/Header/Header'
import { Routers } from './utils/Routers'
import { Footer } from './pages/Footer/Footer'


function App() {

  return (
    <div className='max-w-7xl mx-auto px-4'>
      <Header/>
      <Routers/>
    </div>
  )
}

export default App

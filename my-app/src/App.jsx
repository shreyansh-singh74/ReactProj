import React from 'react'
import {Features,Blog,Footer,Possibility,WhatGPT3,Header} from './containers'
import { Navbar,Cta,Brand } from './components'
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className='App'>
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>

    </div>
    
  )
}

export default App
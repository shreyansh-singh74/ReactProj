import React from 'react'
import './whatGPT3.css'
import { Feature } from '../../components'
const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title={"What is GPT-3"} text={"Advanced AI language model that understands and generates human-like text. Advanced AI language model that understands and generates human-like text"}/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient_text'>The possibilities beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title={"Chatbots"} text={"Create intelligent conversational agents that respond naturally to inquiries."}/>
        <Feature title={"Knowledge Base"} text={"Access vast information networks to solve complex problems efficiently."}/>
        <Feature title={"Education"} text={"Transform learning experiences with personalized AI-powered educational content."}/>
      </div>
    </div>
  )
}

export default WhatGPT3
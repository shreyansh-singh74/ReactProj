import React from 'react'
import './features.css'
import {Feature} from '../../components'


const Features = () => {

  const featuresData = [
    {
      title: 'Improving end distrust instantly',
      text: 'From they fine john he give of rich he. They age around much. They have you the most beautiful in the world.',
    },
    {
      title: 'Empowering the Future',
      text: 'The future belongs to those who believe in the beauty of their dreams.',
    },
    {
      title: 'Innovating for Tomorrow',
      text: 'Innovation distinguishes between a leader and a follower.',
    },
    {
      title: 'Revolutionizing the Industry',
      text: 'The only way to do great work is to love what you do.',
    },
  ]

  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient_text'>The Future is Now and You Just Need to Realize it. Step into Future Today & Make it Happen</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
         {featuresData.map((item,index) => (
          <Feature key={index} title={item.title} text={item.text} />
         ))}
      </div>
    </div>
  )
}

export default Features
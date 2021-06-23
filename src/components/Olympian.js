import React from 'react'
import './assets/Olympian.scss'
import hero from './assets/img/olympian_hero.png'

export default function Events (props) {
  return (
    <body>
      <section className='hero-temp'>
        <div className='landing-header'>
          <h1 id='potentia'><span className='highlight-gray'>&nbsp;Potentia&nbsp;</span></h1>
          <h1 id='robotics'><span className='highlight-gray'>&nbsp;Robotics&nbsp;</span></h1>
        </div>
        <div className='landing-subheader'>
          <p>
            <span className='highlight-gray'>&nbsp;This page is under construction.&nbsp;<br />&nbsp;Please check back later!&nbsp;</span>
          </p>
        </div>
        <img
          className='landing-robot'
          src={hero}
          alt=''
        />
      </section>
    </body>
  )
}

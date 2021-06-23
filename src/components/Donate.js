import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'
import bot2 from './assets/img/bot2.png'
import './assets/Donate.scss'

// If you need anything for this ask Ram Reddy

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    background-color: #293241;
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    margin: 0;
    color: #555;
  }
`

class Donate extends Component {
  render () {
    return (
      <>
        <GlobalStyle />
        {/* <div className="content-box"> hjalsdklANSDFKJASNDF</div> */}
        <div className='centered'>
          <div className='textArea'>
            <div className='text1'>Donate Today</div>
            <span><br /></span>
            <span><br /></span>
            <span><br /></span>
            <span><br /></span>
            <span><br /></span>
            <span><br /></span>
            <span><br /></span>
            <span><br /></span>
            <span><br /></span>
            <div className='text2'>Paypal widget here</div>
            <span><br /></span>
            <span><br /></span>
            <span><br /></span>
            <span><br /></span>
            <span><br /></span>
            <div className='text2'>Gofundme widget here</div>
          </div>
        </div>
        <img className='donateRobot' src={bot2} />
      </>
    )
  }
}

export default Donate

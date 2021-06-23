import './assets/Events.scss'
import React, { Component } from 'react'
import { createGlobalStyle } from 'styled-components'
import bot2 from './assets/img/bot2.png'
import './assets/Donate.scss'
// var Diamond = require("./assets/img/0002.jpg")
import icon from './assets/img/0002.jpg'
import icon2 from './assets/img/0001.jpg'
import icon3 from './assets/img/0003.jpg'
import pdf from './assets/Python_BootCamp.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

class Events extends Component {
  render () {
    return (
      <>
        <br />
        <div className='flyer-container'>
          <img src={icon2} width='30%' height='100%' alt='image of team member' />
        </div>
        <div className='pdf-link-container'>

          <div className='pdf-link'>
            <a href={pdf} download className='pdf-download'><strong>Learn More</strong>&nbsp;<FontAwesomeIcon icon={faArrowCircleRight} /></a>
          </div>

        </div>

        <div className='bottom' />
      </>
    )
  }
}

export default Events

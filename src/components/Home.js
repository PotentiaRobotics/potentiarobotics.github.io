import React from 'react'
import './assets/Home.scss'
import hero from './assets/img/olympian_hero.png'
import team_picture from './assets/img/team_picture.png'
import olympian_waving from './assets/img/olympian_waving.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import { Spring } from 'react-spring/renderprops'

export default function Home (props) {
  return (
    <body className='main-content'>
      <section className='hero'>
        <div className='landing-header'>
          <h1 id='potentia'><span className='highlight-gray'>&nbsp;Potentia&nbsp;</span></h1>
          <h1 id='robotics'><span className='highlight-gray'>&nbsp;Robotics&nbsp;</span></h1>
        </div>
        <div className='landing-subheader'>
          <p>
            <span className='highlight-gray'>&nbsp;The first high school team to design and&nbsp;<br />&nbsp;build a full-size bipedal humanoid robot.&nbsp;</span>
          </p>
        </div>
        <img
          className='landing-robot'
          src={hero}
          alt=''
        />
      </section>
      <section className='intro-wrapper'>
        <div className='intro-content'>
          <h1 className='intro-header'>Who are we?</h1>
          <p className='intro-text'>
            Potentia Robotics is the first high school team to design and build a fully-functional humanoid robot <strong>entirely from scratch</strong>.
            It's run by students from the Thomas Jefferson High School for Science and Technology (TJHSST). <br /><br />
            We're building <span class='text-blue'><strong>Olympian</strong></span>: our low-cost, 6-foot tall, bipedal humanoid robot with a human-like dynamically stable gait, limb mobility, and balance capabilities, that can be controlled effectively and efficiently from afar.
          </p>
        </div>
        <div className='intro-space' />
        <div className='mission-statement'>
          <h1 className='intro-header'>Our mission</h1>
          <p className='intro-text'>
            At Potentia Robotics, we want to push the boundaries of what high-school students can achieve.
            Our ultimate goal is to further STEM knowledge in the K-12 community while leading by example and showing other students that age isn't a limiting factor for any project, no matter how large-scale.
          </p>
        </div>
      </section>
      <section className='picture-redirect-wrapper'>
        <div className='about-us-content'>
          <a href='/about'>
            <img
              className='team-picture'
              src={team_picture}
              alt=''
            />
          </a>
          <div className='about-us-link-wrapper'>
            <a href='/about' className='about-us-link'><strong>Meet the Team</strong>&nbsp;<FontAwesomeIcon icon={faArrowCircleRight} /></a>
          </div>
        </div>
        <div className='intro-space' />
        <div className='meet-olympian-content'>
          <a href='/meet-olympian'>
            <img
              className='olympian-waving'
              src={olympian_waving}
              alt=''
            />
          </a>
          <div className='about-us-link-wrapper'>
            <a href='/meet-olympian' className='about-us-link'><strong>Meet Olympian</strong>&nbsp;<FontAwesomeIcon icon={faArrowCircleRight} /></a>
          </div>
        </div>
      </section>
      <div className='buttonSet' id='goHere'>
        <Spring
          from={{ opacity: 0 }}
          to={{ opacity: 1 }}
          config={{ delay: 1000 }}
        >
          {props => (
            <div style={props}>
              <a href='https://www.linkedin.com/in/potentia-robotics-790582204/' target='_blank' rel='noopener noreferrer' className='fa fa-linkedin' />
              <a href='https://www.youtube.com/channel/UCKzWtwtWSejKt9THR_XlU7Q' target='_blank' rel='noopener noreferrer' className='fa fa-youtube' />
              <a href='https://github.com/PotentiaRobotics' target='_blank' rel='noopener noreferrer' className='fa fa-github' />
              <a href='#' target='_blank' rel='noopener noreferrer' className='fa fa-instagram' />
              <a href='https://www.facebook.com/potentiarobotics/' target='_blank' rel='noopener noreferrer' className='fa fa-facebook' />
            </div>
          )}
        </Spring>
      </div>
    </body>
  )
}

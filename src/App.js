import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './components/About'
import ContactForm from './components/Contact'
import Home from './components/Home'
import PostDetail from './components/PostDetail'
import Olympian from './components/Olympian'
import Blog from './components/Blog'
import Donate from './components/Donate'
import Navbar from './components/Navbar'
import Sponsors from './components/Sponsors'
import Events from './components/Events'

function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={About} path='/about' />
        <Route component={ContactForm} path='/contact' />
        <Route component={PostDetail} path='/blog/:slug' />
        <Route component={Blog} path='/blog' />
        <Route component={Donate} path='/donate' />
        <Route component={Sponsors} path='/sponsors' />
        <Route component={Events} path='/events' />
        <Route component={Olympian} path='/meet-olympian' />
        <Route component={Home} path='/' />

      </Switch>
    </BrowserRouter>
  )
}

export default App

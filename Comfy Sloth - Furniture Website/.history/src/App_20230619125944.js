import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { Home, SingleProduct, Cart, Checkout, Error, About, Products, Private } from './pages'

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/about'>
        <About />
      </Route>
      <Route exact path='/cart'>
        <Cart />
      </Route>
      <Route exact path='/products'>
        <Products />
      </Route>
    </Switch>
  </Router>
  )
}

export default App
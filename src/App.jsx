import React from 'react'
import { Route, Switch } from 'react-router'
import Home from './components/Home'
import Recent from './components/Recent'
import Cart from './components/Cart'
import Searchresult from './components/Searchresult'
import Post from './components/Post'
import Bestseller from './components/Bestseller'
import Bestdetails from './components/Bestdetails'
import Romancedetails from './components/Romacedetails'
import Classicsdetails from './components/Classicdetails'
import Romance from './components/Romance'
import Classic from './components/Classic'
import Search from './components/Search'
import Checkout from './components/Checkout'


function App() {
  return (
    <div>
    
      <Switch>
        <Route component={Home}   exact path="/"></Route>
        <Route component={Recent} exact path="/recent" ></Route>
        <Route component={Cart}   exact path="/cart"></Route>
        <Route component={Searchresult}   exact path="/searchresult"></Route>
        <Route component={Post}   exact path="/post"></Route>
        <Route exact component={Bestseller} path="/best"/>
      <Route exact component={Bestdetails} path="/best/:id"/>
     <Route exact component={Romancedetails} path="/romance/:id"/>
     <Route exact component={Classicsdetails} path="/clasic/:id"/>
     <Route exact component={Romance} path="/romance"/>
     <Route exact component={Classic} path="/classic"/> 
     <Route exact component={Search} path="/search"/> 
     <Route exact component={Checkout} path="/checkout"/> 

      </Switch>
    </div>
  )
}

export default App

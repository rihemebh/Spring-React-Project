import React, { Component } from 'react'
import Category from './Category'
import Home from './Home'
import Expenses from './Expenses'
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'


export class App extends Component {
    render() {
        return (
         <Router>
             <Switch>
                 <Route path="/" exact="true" component={Home}/>
                 <Route path="/Categories" exact="true" component={Category}/>
                 <Route path="/expenses" exact="true" component={Expenses} />
                                  </Switch>
         </Router>
        )
    }
}

export default App

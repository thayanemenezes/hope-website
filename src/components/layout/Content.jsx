import React from 'react'
import './Content.css'
import { Switch, Route } from 'react-router-dom'

import Home from '../../views/pages/Home/index'
import About from '../../views/pages/About'
import Search from '../../views/pages/Search'
import Donate from '../../views/pages/Donate'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/about">
                <About />
            </Route>

            <Route path="/search">
                <Search />
            </Route>

            <Route path="/donate">
                <Donate />
            </Route>
            
        </Switch>
    </main>
)

export default Content


import React from 'react'
import {RootCmp} from './RootCmp'
import {store} from './store/store'
import {Provider} from 'react-redux'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'


import './assets/styles/monday_css.css'
import './assets/styles/monday_just_css.css'

import './assets/styles/main.scss'
import './assets/styles/just_css.css'
import './assets/styles/font-awesome.css'
import './assets/styles/setup/typography_fr.css'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <Router>
            <RootCmp/>
        </Router>
    </Provider>
)

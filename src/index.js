import React, { StrictMode, } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {  GridProvider } from './context/GridContext'

// Styles
import './index.css'

// Root
const root = document.querySelector('#root')

ReactDOM.render(
  <StrictMode>
    <GridProvider>
      <App />
    </GridProvider>
  </StrictMode>,
  root
)

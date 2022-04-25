import React, { Component } from 'react'
import Demo from './components/1_setState'
import Demo2 from './components/2_lazyLoad'
import Demo3 from './components/3_hooks'
import Demo4 from './components/4_Fragment'
import Demo5 from './components/5_Context'
import Demo6 from './components/6_optimize'
import Demo7 from './components/7_renderProps'
import Demo8 from './components/8_ErrorBoundary/Parent'
import { BrowserRouter } from 'react-router-dom'

export default class App extends Component {
  render() {

    return (
      <>
        {/* <Demo></Demo> */}
        {/* <Demo7></Demo7> */}
        <Demo8 />
      </>
    )
  }
}

import React from 'react'

import { Footer, Blog, Possibility, Features, WhatBIG3, Header } from "./container";
import { CTA, Brand, Navbar } from "./component";
import "./appl.css";

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatBIG3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
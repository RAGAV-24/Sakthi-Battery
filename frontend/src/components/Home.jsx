import React from 'react'
import Navbar from './Navbar'
import Carosel from './Carosel'
import Comp1 from "./Comp1"
import Footer from "./Footer"
const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Carosel />
        <Comp1 />

        <Footer />
      </div>
    </div>
  )
}

export default Home
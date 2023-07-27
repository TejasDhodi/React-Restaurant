import React from 'react'
import Navbar from '../componets/Navbar'
import Hero from '../componets/Hero'
import Dishes from '../componets/Dishes'
import Chef from '../componets/Chef'
import Events from '../componets/Events'
import Footer from '../componets/Footer'
// import CustomerReview from '../componets/CustomerReview'/
const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Dishes />
      <Events />
      <Chef />
      <Footer />
      {/* <CustomerReview /> */}

    </>
  )
}

export default Home

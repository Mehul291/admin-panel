import React from 'react'
import Navbar from '../src/assets/components/navbar'
import Home from '../src/assets/components/home'
import InsertCar from '../src/assets/components/insertCar'
import Booking from '../src/assets/components/booking'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <InsertCar/>
      <Booking/>
    </div>
  )
}

export default App

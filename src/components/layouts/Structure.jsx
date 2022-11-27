import React from 'react'
// import {BrowerRouter as Router, Routes, Route} from "react-router-dom"
import Footer from '../molecules/Footer'
import Navbar from '../molecules/Navbar/Index'

const BodyLayout = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}

export default BodyLayout

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Register from '../components/Register'
import SignIn from '../components/SignIn'
import Slider from '../components/Slider'

const Home = () => {

  return (
    <div>
      <Announcement />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="SignIn" element={<SignIn />} />
          <Route path="Register" element={<Register />} />
        </Routes>
        <Slider />
        <Categories />
        <Products />
        <Newsletter />
        <Footer />
      </BrowserRouter>

     
    </div>
  );
}

export default Home
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SetWindowSize from '../Helper/setWindowSize'
import CheckOutPage from '../Pages/CheckOutPage/CheckOutPage'
import ChefsPage from '../Pages/ChefsPage/ChefsPage'
import HomePage from '../Pages/HomePage/HomePage'
import OrderPage from '../Pages/OrderPage/OrderPage'
import RestaurantProfile from '../Pages/RestaurantsPage/RestaurantProfile/RestaurantProfile'
import RestaurantsPage from '../Pages/RestaurantsPage/RestaurantsPage'
import SignInPage from '../Pages/SignInPage/SignInPage'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import HeaderDesktop from './Header/HeaderDesktop'
export default function Layout() {
  const windowSize = SetWindowSize();
  return (
    <div>
      <BrowserRouter>
      {windowSize > 600 ? <HeaderDesktop/> : <Header/>}
        <Routes>
          <Route path='' element={<HomePage />} ></Route>
          <Route path='Restaurants' element={<RestaurantsPage />}></Route>
          <Route path='Order' element={<OrderPage />}></Route>
          <Route path='Sign-In' element={<SignInPage />}></Route>
          <Route path='Check-Out' element={<CheckOutPage />}></Route>
          <Route path='Chefs' element={<ChefsPage />}></Route>
          <Route path='Restaurant' element={<RestaurantProfile/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

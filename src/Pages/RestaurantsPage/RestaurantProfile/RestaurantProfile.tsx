import React from 'react'
import HeroRestaurant from './Components/HeroRestaurant/HeroRestaurant'
import NavBar from './Components/NavBar/NavBar'
import { DishesContainer, WrapperRestaurantProfile } from './Styles'

export default function RestaurantProfile() {
  return (
    <WrapperRestaurantProfile>
      <HeroRestaurant/>
      <NavBar/>
      <DishesContainer>
        
      </DishesContainer>
    </WrapperRestaurantProfile>
    )
}

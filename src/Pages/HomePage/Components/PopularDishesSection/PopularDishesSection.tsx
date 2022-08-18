import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import DishCard from '../../../../Compenents/DishCard/DishCard'
import { settings } from '../../../../Constants/Variables'
import IsDesktop from '../../../../Helper/WindowCheker'
import { PopularDishesContainer, PopularDishesText, WrapperPopularDishesSection } from './Styles'

export default function PopularDishesSection() {
  return (
    <WrapperPopularDishesSection>
        <PopularDishesText>Signature Dish Of:</PopularDishesText>
        {IsDesktop() && <PopularDishesContainer>
          <DishCard/>
          <DishCard/>
          <DishCard/>
        </PopularDishesContainer>}
        {!IsDesktop() && <Slider{...settings}>
        <DishCard/>
        <DishCard/>
        <DishCard/>
        <DishCard/>
          <DishCard/>
          <DishCard/>
        </Slider>}
    </WrapperPopularDishesSection>
  )
}

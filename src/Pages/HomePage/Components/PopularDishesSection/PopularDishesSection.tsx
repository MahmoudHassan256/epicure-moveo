import React from 'react'
import DishCard from '../../../../Compenents/DishCard/DishCard'
import { PopularDishesContainer, PopularDishesText, WrapperPopularDishesSection } from './Styles'

export default function PopularDishesSection() {
  return (
    <WrapperPopularDishesSection>
        <PopularDishesText>Signature Dish Of:</PopularDishesText>
        <PopularDishesContainer>
          <DishCard/>
          <DishCard/>
          <DishCard/>
        </PopularDishesContainer>
    </WrapperPopularDishesSection>
  )
}

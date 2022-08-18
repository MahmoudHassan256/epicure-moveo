import React from 'react'
import SetWindowSize from '../../Helper/setWindowSize';
import { SheikelLine, Dish, DishImg, DishInfo, DishName, Ingredients, TypeIcon, SheikelIcon, Price, PriceContainer, PriceContainerDesktop } from './Styles';
export default function DishCard() {
  const windowSize = SetWindowSize();
  const isDesktop = (windowSize > 600) ? true : false;
  return (
    <Dish>
      <DishImg src="/Images/HomePage/Desktop/Dish.png" alt="dish" />
      <DishInfo>
        <DishName>Pad Ki Mao</DishName>
        <Ingredients>Shrimps, Glass Noodles, Kemiri Nuts, Shallots,
          Lemon Grass, Magic
          Chili Brown Coconut</Ingredients>
      <TypeIcon src="Images/Icon/Types/Type=Vegan, Size=Small.svg" alt="type" />
        {!isDesktop && <PriceContainer>
          <SheikelIcon src="Images/Icon/Sheikel.svg" alt="sheikel" />
          <Price>88</Price>
        </PriceContainer>
        }
        {isDesktop && 
        <PriceContainerDesktop>
            <SheikelLine></SheikelLine>
            <PriceContainer>
              <SheikelIcon src="Images/Icon/Sheikel.svg" alt="sheikel" />
              <Price>88</Price>
            </PriceContainer >
            <SheikelLine></SheikelLine>
          </PriceContainerDesktop>
        }
      </DishInfo>
    </Dish>
  )
}

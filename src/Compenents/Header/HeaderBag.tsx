import React from 'react'
import { useSelector } from 'react-redux';
import { DishBagData } from '../../Interfaces/LayoutInterfaces';
import DishCardv3 from '../DishCard/DishCardv3';
import { Icon } from '../styles';
import { HeaderBagWrapper, HeaderBagEmptyContent, HeaderBagEmptyIcon, HeaderBagEmptyText, Bag, CheckOutButton, HeaderBagContent, HeaderBagContentTopSide, HeaderBagContnetBotSide, TopSideHeader, Total } from './HeaderBagStyles'
export default function HeaderBag() {
  const bag:DishBagData[] =useSelector((state:any)=>state.bag.value);
  return (
    <HeaderBagWrapper>
      {bag.length === 0 && 
      <HeaderBagEmptyContent>
        <HeaderBagEmptyIcon/>
        <HeaderBagEmptyText>Your bag is empty</HeaderBagEmptyText>
      </HeaderBagEmptyContent>}

      {bag.length > 0 && 
      <HeaderBagContent>
        <HeaderBagContentTopSide>
          <TopSideHeader>My Order</TopSideHeader>
          <Bag>
            {bag.map((ele,key)=><DishCardv3 key={key} {...ele}/>)}
          </Bag>
        </HeaderBagContentTopSide>
        <HeaderBagContnetBotSide>
          <Total>Total - <Icon src='Images/Icon/Sheikel.svg' alt='$'/>172</Total>
          <CheckOutButton>Checkout</CheckOutButton>
        </HeaderBagContnetBotSide>
      </HeaderBagContent>}

    
    </HeaderBagWrapper>
  )
}

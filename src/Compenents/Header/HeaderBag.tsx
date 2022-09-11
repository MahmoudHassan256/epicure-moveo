import React from 'react'
import { useSelector } from 'react-redux'
import { DishBagData } from '../../Interfaces/LayoutInterfaces';
import DishCardv3 from '../DishCard/DishCardv3'
import { HeaderBagWrapper, HeaderBagHeader, Bag, TotalPriceContainer, TotalPriceHeader, TotalPriceValue, CheckoutButton, TopSide, BottomSide } from './HeaderBagStyles'
/*
      {bag.length===0 && <div>
        Bag is empty plz add to it
        </div>}

        *
              {bag.length === 0 &&
        <div>
*/
export default function HeaderBag() {
  const bag: DishBagData[] = useSelector((state: any) => state.bag.value);
  /*
  function getTotal(){
    let total=0;
    for (let index = 0; index < bag.length; index++) {
      total+=bag[index].price;
    }
    return total;
  }
*/
  return (
    <HeaderBagWrapper>
      <TopSide>
        <HeaderBagHeader>My order</HeaderBagHeader>
        <Bag>
          {bag.map((ele, key) =>
            <DishCardv3 key={key} {...ele} />
          )}
        </Bag>
      </TopSide>
      <BottomSide>
        <TotalPriceContainer>
          <TotalPriceHeader>Total - </TotalPriceHeader>

          <TotalPriceValue></TotalPriceValue>
        </TotalPriceContainer>
        <CheckoutButton>Checkout</CheckoutButton>
      </BottomSide>
    </HeaderBagWrapper>
  )
}

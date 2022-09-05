import { Checkbox } from '@material-ui/core';
import React, { useState } from 'react'
import { AddToBagBtn, ChangeInput, ChangesContainer, ChangesHeader, CloseIcon, Container, DishProfileBackground, DishProfileHeader, DishProfileWrapper, MinusBtn, PlusBtn, QuantityContainer, QuantityCounter, QuantityHeader, QuantityNumber, SideChoserContainer, SideChoserHeader, SiderInput } from './styles'
import { sides, changes } from '../../Constants/Variables'
import HeroDish from './HeroDish/HeroDish';
import Footer from '../Footer/Footer';
import IsDesktop from '../../Helper/WindowCheker';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
interface sidesArrayData {
  value: string,
  state: boolean,
}
export default function DishProfileMobile() {
  const [Quantity, updateQuantity] = useState<number>(1);
  const increaseCount = () => { updateQuantity(Quantity + 1) }
  const navigate=useNavigate();
  const Dish = useSelector((state:any) => state.selecteddish.value);
  const decreaseCount = () => { if (Quantity > 1) updateQuantity(Quantity - 1) }
  const [SidesChecked, updateSides] = useState<sidesArrayData[]>([]);
  const [ChangesChecked, updateChanges] = useState<sidesArrayData[]>([]);
  const addSide = (value: string) => {
    let temp = SidesChecked.filter((ele) => ele.value === value);
    if (temp.length === 0) {
      updateSides(SidesChecked => [...SidesChecked, { value: value, state: true }])
    }
    else {
      updateSides(SidesChecked.filter((ele) => ele.value !== value))
    }
  }
  const addChange = (value: string) => {
    let temp = ChangesChecked.filter((ele) => ele.value === value);
    if (temp.length === 0) {
      updateChanges(ChangesChecked => [...ChangesChecked, { value: value, state: true }])
    }
    else {
      updateChanges(ChangesChecked.filter((ele) => ele.value !== value))
    }
  }
  return (
    <DishProfileBackground>
      <DishProfileWrapper>
      <DishProfileHeader>
        {!IsDesktop() && <CloseIcon src="Images/Icon/X.svg" alt="" onClick={() => {navigate(-1);window.scrollTo(0,0)}} />}
        </DishProfileHeader>
        <HeroDish url={Dish.url} name={Dish.name} ingredients={Dish.ingredients} price={Dish.price} />
        <Container>
          <SideChoserContainer>
            <SideChoserHeader>Choose a side</SideChoserHeader>
            {sides.map((side, key) =>
              <SiderInput key={key}>
                <Checkbox onChange={() => { addSide(side.value); }} />
                {side.value}
              </SiderInput>
            )}

          </SideChoserContainer>
          <ChangesContainer>
            <ChangesHeader>Changes</ChangesHeader>
            {changes.map((change, key) =>
              <ChangeInput key={key}>
                <Checkbox onChange={() => { addChange(change.value) }} />
                {change.value}
              </ChangeInput>
            )}
          </ChangesContainer>
          <QuantityContainer>
            <QuantityHeader>Quantity</QuantityHeader>
            <QuantityCounter>
              <MinusBtn src='Images/Icon/Minus.svg' alt='minus' onClick={decreaseCount} />
              <QuantityNumber>{Quantity}</QuantityNumber>
              <PlusBtn src='Images/Icon/Plus.svg' alt='plus' onClick={increaseCount} />
            </QuantityCounter>
          </QuantityContainer>
          <AddToBagBtn onClick={() => { navigate(-1);window.scrollTo(0,0) }}>Add to bag</AddToBagBtn>
        </Container>
        {!IsDesktop() && <Footer />}
      </DishProfileWrapper>
    </DishProfileBackground>
  )
}

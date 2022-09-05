import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import DishCardv2 from '../DishCard/DishCardv2'
import { DishData, RestaurantData } from '../../Interfaces/LayoutInterfaces'
import DishProfile from '../DishProfile/DishProfile'
import HeroRestaurant from './Components/HeroRestaurant/HeroRestaurant'
import NavBar from './Components/NavBar/NavBar'
import { DishesContainer, WrapperRestaurantProfile } from './Styles'

export default function RestaurantProfile() {
  const location = useLocation();
  const [Modal,setModalState]=useState(false);
  const Restaurant = location.state as RestaurantData;
  const Dish:DishData=useSelector((state:any)=> state.selecteddish.value)
  const [ActiveTab, setActiveTab] = useState('Breackfast')
  return (
    
    <WrapperRestaurantProfile>
            {Modal && <DishProfile Dish={Dish} ModalCloser={setModalState}/>}

      <HeroRestaurant Restaurant={Restaurant} />
      <NavBar ActiveTab={ActiveTab} setActiveTab={setActiveTab} />
      <DishesContainer>
        {Restaurant.dishescontainer.filter((ele) => ele.type === ActiveTab).map((dish: DishData, key) =>
          <DishCardv2 key={key} closeModal={setModalState} {...dish}/>
        )}
      </DishesContainer>
    </WrapperRestaurantProfile>
  )
}

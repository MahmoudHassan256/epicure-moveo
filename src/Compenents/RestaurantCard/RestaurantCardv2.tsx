import React from 'react'
import { RestaurantData } from '../../Interfaces/LayoutInterfaces'
import { RestaurantInfov2, Restaurantv2, Restaurantv2Img, Restaurantv2Name } from './Styles';
export default function RestaurantCardv2(props:RestaurantData) {

  return (
    <Restaurantv2>
    <Restaurantv2Img src={props.url} alt="restaurant" />
    <RestaurantInfov2>
        <Restaurantv2Name>{props.name}</Restaurantv2Name>
    </RestaurantInfov2>
</Restaurantv2>
  )
}

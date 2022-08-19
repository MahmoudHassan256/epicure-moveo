import React from 'react'
import SetWindowSize from '../../Helper/setWindowSize';
import { RestaurantData } from '../../Interfaces/LayoutInterfaces';
import StarsSlide from '../StarsSlide/StarsSlide';
import { Restaurant, RestaurantChefName, RestaurantImg, RestaurantInfo, RestaurantName } from './Styles';
export default function RestaurantCard(props:RestaurantData) {
    const windowSize = SetWindowSize();

    const isDesktop=(windowSize > 600)?true : false;

    return (
        <Restaurant>
            <RestaurantImg src={props.url} alt="restaurant" />
            <RestaurantInfo>
                <RestaurantName> {props.name}</RestaurantName>
                <RestaurantChefName>{props.chef}</RestaurantChefName>
                {isDesktop && <StarsSlide starsNumber={props.stars}/>}
            </RestaurantInfo>
        </Restaurant>
    )
}

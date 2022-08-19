import React from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import RestaurantCard from '../../../../Compenents/RestaurantCard/RestaurantCard';
import RestaurantCardv2 from '../../../../Compenents/RestaurantCard/RestaurantCardv2';
import { RestaurantArray, settings } from '../../../../Constants/Variables'
import IsDesktop from '../../../../Helper/WindowCheker';
import { AllBox, AllRestaurantsText, ArrowIcon, PopularRestaurantsSectionContainer, PopularRestaurantsSectionText, WrapperPopularRestaurantsSection } from './Styles';

export default function PopularRestaurantsSection() {
  const navigate = useNavigate();
  function GoToRestaurants() {
    navigate('/Restaurants');
    window.scrollTo(0, 0);
  }
  function AddRestaurantsDesktop() {
    return (RestaurantArray.slice(0, 3).map((data, key) =>
      <RestaurantCard key={key} name={data.name} chef={data.chef} url={data.url} stars={data.stars} />
    ))
  }
  function AddRestaurantsMobile() {
    return (RestaurantArray.map((data, key) =>
      <RestaurantCardv2 key={key} name={data.name} chef={data.chef} url={data.url} stars={data.stars} />
    ))
  }
  return (
    <WrapperPopularRestaurantsSection>
      <PopularRestaurantsSectionText>popular restaurant in epicure:</PopularRestaurantsSectionText>
      {IsDesktop() && <PopularRestaurantsSectionContainer>{AddRestaurantsDesktop()}</PopularRestaurantsSectionContainer>}
      {!IsDesktop() && <Slider {...settings}>{AddRestaurantsMobile()}</Slider>}
      <AllBox>
        <AllRestaurantsText>All restaurants</AllRestaurantsText>
        <ArrowIcon onClick={GoToRestaurants} src='/Images/Icon/Arrow.svg' alt="arrow" />
      </AllBox>
    </WrapperPopularRestaurantsSection>
  )
}

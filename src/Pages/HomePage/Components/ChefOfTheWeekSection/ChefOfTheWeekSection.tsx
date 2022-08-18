import React from 'react'
import ChefCard from '../../../../Compenents/ChefCard/ChefCard'
import RestaurantCardv2 from '../../../../Compenents/RestaurantCard/RestaurantCardv2'
import { RestaurantsArray } from '../../../../Constants/Variables'
import IsDesktop from '../../../../Helper/WindowCheker'
import { ChefInfoSection, ChefoftheWeekContainer, ChefoftheWeekInfo, ChefOfTheWeekNameRestaurants, ChefOfTheWeekText, RestaurantsContainer, WrapperChefOfTheWeekSection } from './Styles'

export default function ChefOfTheWeekSection() {
  function AddRestaurantsDesktop(){
    return (RestaurantsArray.slice(0,3).map((data, key) =>
      <RestaurantCardv2 key={key} name={data.name} chef={data.chef} urlBig={data.urlBig} stars={data.stars} />
    ))
  }
  function AddRestaurantsMobile(){
    return (RestaurantsArray.map((data, key) =>
      <RestaurantCardv2 key={key} name={data.name} chef={data.chef} urlBig={data.urlBig} stars={data.stars} />
    ))
  }
  return (
    <WrapperChefOfTheWeekSection>
      <ChefoftheWeekContainer>
        <ChefOfTheWeekText>Chef of the week:</ChefOfTheWeekText>
        <ChefInfoSection>
          <ChefCard />
          <ChefoftheWeekInfo>Chef Yossi Shitrit has been living and breathing his culinary dreams for more than two decades, including running the kitchen in his first restaurant, the fondly-remembered Violet, located in Moshav  Udim. Shitrit's creativity and culinary  acumen born of long experience  are expressed in the every detail of each and every dish.</ChefoftheWeekInfo>
        </ChefInfoSection>
        </ChefoftheWeekContainer>
        <ChefOfTheWeekNameRestaurants>Yossi's Restaurants</ChefOfTheWeekNameRestaurants>
        <RestaurantsContainer>
          {IsDesktop() && AddRestaurantsDesktop()}
          {!IsDesktop() && AddRestaurantsMobile()}
        </RestaurantsContainer>
    </WrapperChefOfTheWeekSection>
  )
}

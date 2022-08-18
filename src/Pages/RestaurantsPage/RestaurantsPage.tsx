import React, { useState } from 'react'
import { Map, RestaurantsPageRestaurantsContainer, RestaurantsPageText, RestaurantsPageWrapper } from './Styles'
import { RestaurantPageArray } from '../../Constants/Variables'
import SetWindowSize from '../../Helper/setWindowSize'
import RestaurantsPageNav from './Components/RestaurantsPageNav/RestaurantsPageNav'
import IsDesktop from '../../Helper/WindowCheker'
import FilterNavSection from './Components/FilterNavSection/FilterNavSection'
import RestaurantCard from '../../Compenents/RestaurantCard/RestaurantCard'
export default function RestaurantsPage() {
  const windowSize = SetWindowSize();
  const [ActiveTab,setActiveTab] = useState('All');
  if(ActiveTab==='Map View' && windowSize <600){
    setActiveTab('All');
  }
  
  return (
    <RestaurantsPageWrapper>
      {!IsDesktop() && <RestaurantsPageText>Restaurants</RestaurantsPageText>}
      <RestaurantsPageNav setActiveTab={setActiveTab} ActiveTab={ActiveTab}/>
      {IsDesktop() && <FilterNavSection/> }
      {IsDesktop() && ((ActiveTab) === 'Map View' && <Map src='Images/RestaurantsPage/Images/Desktop/Map.jpg' alt='Map'/>)}
      <RestaurantsPageRestaurantsContainer>
        {ActiveTab === 'All' && RestaurantPageArray.map((data, key) =>
          <RestaurantCard key={key} name={data.name} chef={data.chef} urlSmall={data.urlBig} stars={data.stars} />
          )}
        {ActiveTab === 'New' && RestaurantPageArray.filter(ele => ele.new === true).map((data, key) =>
          <RestaurantCard key={key} name={data.name} chef={data.chef} urlSmall={data.urlBig} stars={data.stars} />)}
        {ActiveTab === 'Most Popular' && RestaurantPageArray.filter(ele=>ele.ispopular===true).map((data, key) =>
          <RestaurantCard key={key} name={data.name} chef={data.chef} urlSmall={data.urlBig} stars={data.stars} />
          )}
        {ActiveTab === 'Open Now' && RestaurantPageArray.filter(ele => ele.open===true).map((data, key) =>
          <RestaurantCard key={key} name={data.name} chef={data.chef} urlSmall={data.urlBig} stars={data.stars} />
          )}
      </RestaurantsPageRestaurantsContainer>
    </RestaurantsPageWrapper>
  )
}

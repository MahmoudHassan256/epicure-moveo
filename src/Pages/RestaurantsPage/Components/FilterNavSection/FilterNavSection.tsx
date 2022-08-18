import React, { useState } from 'react'
import { IconArrowDown, RestaurantsNavTxt, WrapperFilteringNavSection } from './Styles'

export default function FilterNavSection() {
  const[OpenPriceRange,setOpenPriceRange]=useState(false)
  const[OpenDistanceRange,setOpenDistanceRange]=useState(false)
  const[OpenRatingRange,setOpenRatingRange]=useState(false)
  return (
<WrapperFilteringNavSection>
          <RestaurantsNavTxt >Price Range<IconArrowDown src='Images/Icon/ArrowDown.svg' alt='arrow-down' onClick={()=>setOpenPriceRange(!OpenPriceRange)}/></RestaurantsNavTxt>
          
          <RestaurantsNavTxt>Distance<IconArrowDown src='Images/Icon/ArrowDown.svg' alt='arrow-down' onClick={()=>setOpenDistanceRange(!OpenDistanceRange)}/></RestaurantsNavTxt>

          <RestaurantsNavTxt>Rating<IconArrowDown src='Images/Icon/ArrowDown.svg' alt='arrow-down' onClick={()=>setOpenRatingRange(!OpenRatingRange)}/></RestaurantsNavTxt>

</WrapperFilteringNavSection>  
)
}

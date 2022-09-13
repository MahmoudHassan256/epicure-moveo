import React, { useState } from 'react'
import { ClearBtn, DistanceText, MyLocationText, SliderBox, SliderHeader, SliderSection, TopSection, WrapperDistanceSection } from './styles'

export default function DistanceSection() {
  const [Distance, setDistance] = useState(4)
  const [ClearBtnState,updateClearBtn]=useState(false)

  return (
    <WrapperDistanceSection>
      <TopSection>Distance</TopSection>
      <SliderSection>
        <SliderHeader>
          <MyLocationText>My location</MyLocationText>
          <DistanceText>{Distance}km</DistanceText>
        </SliderHeader>
        <SliderBox>
        </SliderBox>
      </SliderSection>
      {ClearBtnState && <ClearBtn onClick={()=>{updateClearBtn(false);
      setDistance(4);
      }}>Clear</ClearBtn>}

    </WrapperDistanceSection>
  )
}

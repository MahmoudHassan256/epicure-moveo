import React, { useState } from 'react'
import { ClearBtn, DistanceText, MyLocationText, SliderBox, SliderHeader, SliderSection, TopSection, WrapperDistanceSection } from './styles'
import { Slider } from '@material-ui/core'

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
        <SliderBox><Slider 
        value={Distance}
        step={0.1}
        min={0}
        max={4}
        onChange={(e,data)=>{setDistance(data as number);
        updateClearBtn(true);
        }}
        /></SliderBox>
      </SliderSection>
      {ClearBtnState && <ClearBtn onClick={()=>{updateClearBtn(false);
      setDistance(4);
      }}>Clear</ClearBtn>}

    </WrapperDistanceSection>
  )
}

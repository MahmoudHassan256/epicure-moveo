import React, { useState } from 'react'
import { ClearBtn, MaxPriceRange, MaxRange, MinPrinceRange, MinRange, Price, PriceRangeDivider, PriceRangeSelectedText, PriceRangeText, PriceSection, SheikelIcon, SliderBox, SliderHeader, SliderSection, WrapperPriceRangeSection } from './styles'


export default function PriceRangeSection() {
  const [ClearBtnState,updateClearBtn]=useState(false)
  const [Range, setRange] = useState<number[]>([12, 357]);
  return (
    <WrapperPriceRangeSection>
      <PriceSection>
        <PriceRangeSelectedText>Price Range Selected</PriceRangeSelectedText>
        <PriceRangeText>
          <MinPrinceRange>
            <SheikelIcon src='Images/Icon/Sheikel.svg'/>
            <Price>12</Price>
          </MinPrinceRange>
          <PriceRangeDivider>-</PriceRangeDivider>
          <MaxPriceRange>
            <SheikelIcon src='Images/Icon/Sheikel.svg'/>
            <Price>357</Price>
          </MaxPriceRange>
        </PriceRangeText>
      </PriceSection>
      <SliderSection>
      <SliderHeader>
        <MinRange><SheikelIcon src='Images/Icon/Sheikel.svg'/>{Range[0]}</MinRange>
        <MaxRange><SheikelIcon src='Images/Icon/Sheikel.svg'/>{Range[1]}</MaxRange>
      </SliderHeader>
      <SliderBox>
      </SliderBox>
      </SliderSection>
      {ClearBtnState && <ClearBtn onClick={()=>{updateClearBtn(false);
     setRange([12,357]);
    }}>Clear</ClearBtn>}

    </WrapperPriceRangeSection>
  )
}

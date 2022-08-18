import React from 'react'
import { MaxPriceRange, MinPrinceRange, Price, PriceRangeDivider, PriceRangeSelectedText, PriceRangeText, SheikelIcon, WrapperPriceRangeSection } from './styles'

export default function PriceRangeSection() {
  return (
    <WrapperPriceRangeSection>
      <PriceRangeSelectedText>Price Range Selected</PriceRangeSelectedText>
      <PriceRangeText>
        <MinPrinceRange>
          <SheikelIcon />
          <Price></Price>
        </MinPrinceRange>
        <PriceRangeDivider></PriceRangeDivider>
        <MaxPriceRange>
          <SheikelIcon />
          <Price></Price>
        </MaxPriceRange>
      </PriceRangeText>
    </WrapperPriceRangeSection>
  )
}

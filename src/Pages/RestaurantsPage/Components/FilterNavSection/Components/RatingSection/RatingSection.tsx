import { Checkbox } from '@material-ui/core'
import React, { useState } from 'react'
import StartContainer from './Components/StartContainer'
import { BottomSection, ClearBtn, FormElement, TopSection, WrapperRatingSection } from './styles'


export default function RatingSection() {
  const [Rating, setRating] = useState([false, false, false, false, false])
  const [ClearBtnState, updateClearBtn] = useState(false)

  function fillform(starnumber: number) {
    return (
      <FormElement>
        <Checkbox
          onChange={(e) => {
            Rating[starnumber - 1] = e.target.checked
            updateClearBtn(true);
          }}
        />
        <StartContainer starNumber={starnumber} />
      </FormElement>
    )
  }
  return (
    <WrapperRatingSection>
      <TopSection>Rating</TopSection>
      <BottomSection>
        {fillform(1)}
        {fillform(2)}
        {fillform(3)}
        {fillform(4)}
        {fillform(5)}
        {ClearBtnState && <ClearBtn type='reset' onClick={() => {
          updateClearBtn(false);
          setRating([false, false, false, false, false]);
        }}>Clear</ClearBtn>}
      </BottomSection>
    </WrapperRatingSection>
  )
}

import React from 'react'
import { ChefoftheWeekContainer, ChefoftheWeekImg, ChefoftheWeekName } from './Styles'

export default function ChefCard() {
    return (
        <ChefoftheWeekContainer>
            <ChefoftheWeekImg />
            <ChefoftheWeekName>Yossi Shitrit</ChefoftheWeekName>
        </ChefoftheWeekContainer>
    )
}

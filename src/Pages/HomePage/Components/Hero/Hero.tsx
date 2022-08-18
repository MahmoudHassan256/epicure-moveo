import React from 'react'
import {Wrapper } from '../../../../Styles/Shared'
import {SearchInput, HeroCardBackground, HeroCardText, SearchBox, SearchBar, SerachIcon } from './Styles'

export default function Hero() {
  return (
    <Wrapper>
            <HeroCardBackground>
                <SearchBox>
                    <HeroCardText>Epicure works with the top
                        chef restaurants in Tel Aviv</HeroCardText>
                    <SearchBar>
                        <SerachIcon src="/Images/Icon/Search.svg" alt="" />
                        <SearchInput type="text" placeholder='Search for restaurant cuisine, chef'/>
                    </SearchBar>
                </SearchBox>
            </HeroCardBackground>
        </Wrapper>
  )
}

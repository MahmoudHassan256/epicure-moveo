import React from 'react'
import ContentContainer from './Components/ContentContainer/ContentContainer';
import Hero from './Components/Hero/Hero';
import { HomePageWrapper } from './styles';


export default function HomePage() {
  return (
    <HomePageWrapper>
      <Hero/>
      <ContentContainer/>
    </HomePageWrapper>
  )
}


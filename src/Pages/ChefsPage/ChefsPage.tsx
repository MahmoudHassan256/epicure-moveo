import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ChefCard from '../../Compenents/ChefCard/ChefCard';
import IsDesktop from '../../Helper/WindowCheker';
import { ChefData } from '../../Interfaces/LayoutInterfaces';
import NavBar from './Components/NavBar';
import { ChefsPageContainer, ChefsPageHeader, ChefsPageWrapper } from './styles';

export default function ChefsPage() {
  const [ActiveTab,setActiveTab]=useState('All');
  const Chefs:ChefData[]=useSelector((state:any)=>state.chefs.value);
  return (
    <ChefsPageWrapper>
      {!IsDesktop()&&<ChefsPageHeader>Chefs</ChefsPageHeader>}
      <NavBar ActiveTab={ActiveTab} setActiveTab={setActiveTab}/>
      <ChefsPageContainer>
        {ActiveTab==='All' && Chefs.map((chef,key)=><ChefCard key={key} name={chef.name} url={chef.url}/>)}
        {ActiveTab==='New' && Chefs.filter((chef)=>chef.new===true).map((chef,key)=><ChefCard key={key} name={chef.name} url={chef.url}/>)}
        {ActiveTab==='Most Viewd' && Chefs.filter((chef)=>chef.popular===true).map((chef,key)=><ChefCard key={key} name={chef.name} url={chef.url}/>)}

      </ChefsPageContainer>
    </ChefsPageWrapper>
  )
}

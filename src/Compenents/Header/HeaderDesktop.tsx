import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Epicure, HeaderWrapper, Icon, IconButton, LeftSide, MenuText, MenuTextBold, NavBar, RightSide, SearchInput } from '../styles'

export default function HeaderDesktop() {
    const navigate = useNavigate();
    function GoToChefs() {
        navigate('Chefs');
        window.scrollTo(0, 0);
    }
    const [ActiveTab, setActiveTab] = useState('');
    function GoToRestaurants() {
        navigate('Restaurants');
        window.scrollTo(0, 0);
    }
    function GoToHome() {
        navigate('');
        window.scrollTo(0, 0);
    }
    return (
        <HeaderWrapper>
            <NavBar>
                <LeftSide>
                    <Icon src="./Images/Logo.svg" alt="logo" />
                    <Epicure onClick={() => { GoToHome();
                    setActiveTab(''); }}>Epicure</Epicure>
                    {(ActiveTab === 'Restaurants' && <MenuTextBold>Resturansts </MenuTextBold>) || <MenuText onClick={() => {
                        setActiveTab('Restaurants');
                        GoToRestaurants();
                    }}>Resturansts</MenuText>}
                    {(ActiveTab === 'Chefts' && <MenuTextBold>Chefts </MenuTextBold>) || <MenuText onClick={() => {
                        setActiveTab('Chefts');
                        GoToChefs();
                    }}>Chefts</MenuText>}
                </LeftSide>
                <RightSide>
                    <SearchInput type="text" />
                    <IconButton><Icon src="./Images/Icon/Search.svg" alt="" /></IconButton>
                    <IconButton><Icon src="./Images/Icon/User.svg" alt="" /></IconButton>
                    <IconButton><Icon src="./Images/Icon/Bag.svg" alt="" /></IconButton>
                </RightSide>
            </NavBar>
        </HeaderWrapper>
    )
}

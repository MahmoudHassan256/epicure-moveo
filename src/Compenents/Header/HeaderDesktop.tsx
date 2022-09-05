import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Epicure, HeaderDesktopWrapper, Icon, IconButton, LeftSide, MenuText, MenuTextBold, NavBar, RightSide, SearchInput } from '../styles'

export default function HeaderDesktop() {
    const location = useLocation();

    const navigate = useNavigate();
    function GoToChefs() {
        navigate('Chefs');
        window.scrollTo(0, 0);
    }
    function GoToRestaurants() {
        navigate('Restaurants');
        window.scrollTo(0, 0);
    }
    function GoToHome() {
        navigate('');
        window.scrollTo(0, 0);
    }
    return (
        <HeaderDesktopWrapper>
            <NavBar>
                <LeftSide>
                    <Icon src="./Images/Logo.svg" alt="logo" />
                    <Epicure onClick={() => { GoToHome() }}>Epicure</Epicure>
                    {((location.pathname === '/Restaurant' || location.pathname === '/Restaurants') && <MenuTextBold onClick={() => { GoToRestaurants() }}>Resturansts </MenuTextBold>) || <MenuText onClick={() => { GoToRestaurants(); }}>Resturansts</MenuText>}
                    {((location.pathname === '/Chefs') && <MenuTextBold onClick={() => { GoToChefs() }}>Chefs </MenuTextBold>) || <MenuText onClick={() => { GoToChefs(); }}>Chefs</MenuText>}
                </LeftSide>
                <RightSide>
                    <SearchInput type="text" />
                    <IconButton><Icon src="./Images/Icon/Search.svg" alt="" /></IconButton>
                    <IconButton><Icon src="./Images/Icon/User.svg" alt="" /></IconButton>
                    <IconButton><Icon src="./Images/Icon/Bag.svg" alt="" /></IconButton>
                </RightSide>
            </NavBar>
        </HeaderDesktopWrapper>
    )
}

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';
import HeaderSearch from './HeaderSearch';
import {HeaderWrapper, Icon, IconButton, LeftSide, MiddleSide, NavBar, RightSide } from '../styles';
import HeaderBag from './HeaderBag';
import HeaderSignIn from './HeaderSignIn';

export interface UpdateOpen {
    CloseMenu: React.Dispatch<React.SetStateAction<boolean>>,
}

export default function Header() {
    const [openMenu, updateOpenMenu] = useState(false);
    const [openSearch, updateOpenSearch] = useState(false);
    const [openUser,updateOpenUser]=useState(false);
    const [openBag,updateOpenBag]=useState(false);
    const navigate=useNavigate();
    function GoToHome(){
      navigate('/');
      window.scrollTo(0,0);
    }
    return (
        <HeaderWrapper>
            {openSearch && <HeaderSearch CloseMenu={updateOpenSearch} />}
            {openMenu && <HeaderMenu CloseMenu={updateOpenMenu} />}
            {openUser && <HeaderSignIn closeMenu={updateOpenUser}/>}
            {!openSearch && !openMenu && !openUser && (
            <NavBar>
                <LeftSide>
                    <IconButton onClick={() => {updateOpenMenu(!openMenu);}}><Icon src="./Images/Hambur.svg" alt="Drop-Menu" /></IconButton>
                </LeftSide>
                <MiddleSide onClick={GoToHome}>
                    <Icon src="./Images/Logo.svg" alt="logo" />
                </MiddleSide>
                <RightSide>
                    <IconButton onClick={() => {updateOpenSearch(!openSearch)}}><Icon src="./Images/Icon/Search.svg" alt="" /></IconButton>
                    <IconButton onClick={()=>{updateOpenUser(!openUser)}}><Icon src="./Images/Icon/User.svg" alt="" /></IconButton>
                    <IconButton><Icon src="./Images/Icon/Bag.svg" alt="" onClick={()=>{updateOpenBag(!openBag)}} /></IconButton>
                    {openBag && <HeaderBag/>}

                </RightSide>
            </NavBar>
            )}

        </HeaderWrapper>
    )
}

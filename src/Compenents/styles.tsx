import styled from "styled-components";

export const FooterWrapper = styled.div`
position: relative;
left: 0%;
right: 0%;
margin-top:20px;
height: 202px;
bottom: 0%;
@media screen and (min-width:600px){
    display:flex;
    height:84px;
    justify-content:center;
    gap: 10px;
}
`
export const Box=styled.div``
export const FooterContainer = styled.div`
display: flex;
flex-direction: column;
margin-left:5%;
gap: 40px;
align-items: flex-start;
padding: 0px;
background-color: white;
@media screen and (min-width:600px){
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 40px;
}
`
export const FooterText = styled.div`
height: 22px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
letter-spacing: 1.92px;
color: #000000;
cursor: pointer;
@media screen and (min-width:600px){
    font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
letter-spacing: 1.92px;
color: #000000;
}

`
export const HeaderWrapper = styled.div``
export const NavBar = styled.div`
background: white;
position: fixed;
height: 46px;
right: 0%;
left: 0%;
top: 0%;
display: flex;
padding:0 5%;
align-items: center;
justify-content: space-between;
z-index: 10;
`
export const Epicure = styled.div`
font-family: 'Helvetica Neue';
cursor:pointer;
font-style: normal;
font-weight: 200;
font-size: 27px;
line-height: 33px;
letter-spacing: 1.35px;
color: #000000;
`

export const LeftSide = styled.div`
@media screen and (min-width:600px){
    display: flex;
    list-style-type: none;
    align-items:center;
    gap:15px;
}
`
export const Icon = styled.img``

export const IconPointer=styled(Icon)`
cursor:pointer;
`
export const IconXClose=styled(IconPointer)`
padding-left:20px;
`
export const IconButton = styled.button`
background: transparent;
border: none;
cursor: pointer;
`
export const MiddleSide = styled.div`
cursor:pointer;
`
export const RightSide = styled.div`
@media screen and (min-width:600px){
    display: flex;
    list-style-type: none;
    align-items:center;
    gap:15px;
}
`
export const MenuBackground = styled.div`
padding-top:10px;
height: 413px;
background: #FFFFFF;
position:fixed;
left: 0%;
right: 0%;
top: 0%;
z-index:10;
box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
`
export const Menu = styled.ul`
position: relative;
display: grid;
list-style-type: none;
padding-inline-start:20px;
margin-block-start:40px;
margin-block-end:40px;
gap: 24px;
left: 0%;
bottom: 0%;
height: fit-content;
`
export const MenuText = styled.li`
gap: 40px;
align-items: flex-start;
padding: 0px;
height: 22px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
letter-spacing: 1.92px;
color: #000000;
cursor: pointer;
`
export const MenuTextBold=styled(MenuText)`
font-weight:bold;
text-decoration: underline #DE9200;
`
export const Line = styled.li`
border: 1px solid #F2F2F2;
width: 90%;
margin-bottom: 7%;
`
export const SearchBackground = styled.div`
height:413px ;
background: #FFFFFF;
position:fixed;
left: 0%;
right: 0%;
top: 0%;
z-index:10;
`
export const NavBarHeader = styled(NavBar)`
justify-content:normal;
background: white;
position: relative;
height: 46px;
left: 0%;
top: 0%;
display: flex;
align-items: center;
text-align: center;
gap: 30%;

`
export const SheikelLine=styled.div`
height: 0px;
width:40%;
border: 0.5px solid #979797;
`
export const SearchTerm = styled.div`
font-family: 'Helvetica Neue';
marin-left:50%;
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
letter-spacing: 1.92px;
color: #000000;
`
export const NavBarContent = styled.div`
padding:24px 31px 0 31px;
background:white;
height: 367px;
`
export const SearchBar = styled.div`
box-sizing: border-box;
padding: 6px 12px;
gap: 8px;
width: 100%;
display: flex;
flex-direction: row;
border: 0.5px solid #000000;
border-radius: 4px;
`
export const SearchInput = styled.input`
border: none;
width: 100%;
background-color: transparent;
@media screen and (min-width:600px){
    font-style: normal;
    font-weight: 200;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 1.29px;
    color: #000000;}
`


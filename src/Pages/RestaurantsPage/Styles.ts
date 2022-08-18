import styled from "styled-components";
export const RestaurantsPageWrapper = styled.div`
min-height: 100vh;
padding: 0 0 0 5.57%;
display:flex;
flex-direction:column;
gap:18px;
margin-top:62px;
@media screen and (min-width:600px){
padding:0 8.36% 0;
gap:40px;
`
export const Map=styled.img`
margin-top:-40px;
`
export const RestaurantsPageText=styled.div`
height: 22px;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 200;
font-size: 18px;
line-height: 22px;
letter-spacing: 1.92px;
text-transform: uppercase;
color: #000000;
` 
export const RestaurantsNav=styled.div`
display:flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 21px;
height: 22px;
@media screen and (min-width:600px){
    justify-content:center;
}
`
export const FilteringNav=styled.div`
display:flex;
justify-content:center;
gap:47px;
background: #FAFAFA;
`

export const RestaurantsPageRestaurantsContainer=styled.div`
flex-direction:column;
display:flex;
align-items: flex-start;
padding: 0px;
gap:25px;
@media screen and (min-width:600px){
    display: grid;
    grid-template-columns: auto auto auto;
    gap:40px;
}
`
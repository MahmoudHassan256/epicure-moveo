import styled from "styled-components";

export const HeaderBagHeader=styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;
`
export const Bag=styled.div`
max-height: 299px;
display:flex;
flex-direction:column;
gap:20px;
overflow:scroll;
`
export const TotalPriceContainer=styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0px;
gap: 10px;

`
export const TotalPriceHeader=styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;
display: flex;
align-items: center;
text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;
color: #000000;
`
export const TotalPriceValue=styled.div`
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 18px;
display: flex;
align-items: flex-end;
text-align: center;
letter-spacing: 1.97px;
color: #000000;
`
export const TopSide=styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 20px;
max-height: 299px;

`
export const BottomSide=styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px;
gap: 20px;
max-height: 92px;
`
export const CheckoutButton=styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 5px 24px;
gap: 10px;
background: #000000;
border: 1px solid #000000;
font-family: 'Helvetica Neue';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 20px;
text-align: center;
letter-spacing: 2.67px;
text-transform: uppercase;
color: #FFFFFF;
`
export const HeaderBagWrapper=styled.div`
display: flex;
position:absolute;
left:0;
flex-direction: column;
align-items: center;
padding: 16px 12px 24px;
gap: 83px;
width:95%;
background: #FFFFFF;
box-shadow: 2px 4px 10px rgba(175, 175, 175, 0.25);
`
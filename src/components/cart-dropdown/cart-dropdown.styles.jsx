import styled from 'styled-components';
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 440px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
 // as a child of CartDropdownContainer:
  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton}, {
    margin-top: auto;
    }
`

export const EmptyMessage = styled.span`
font-size: 18px;
margin: 50px auto;
 // as a child of EmptyMessage:
${CartDropdownContainer} {
}

`
export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
`

// with styled components theres no need for this to be inside each other ...
// .cart-dropdown-container {


//   .empty-message {
//     font-size: 18px;
//     margin: 50px auto;
//   }

//   .cart-items {
//     height: 240px;
//     display: flex;
//     flex-direction: column;
//     overflow: scroll;
//   }

//   button {
//     margin-top: auto;
//   }
// }

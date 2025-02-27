import styled from 'styled-components';
import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from '../button/button.styles';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }

  /* Make the cart dropdown responsive for smaller screens */
  @media screen and (max-width: 768px) {
    width: 200px; /* Reduce the width */
    height: 300px; /* Reduce the height */
    top: 80px; /* Adjust the position to avoid overlap */
    right: 20px; /* Adjust the position */
  }

  @media screen and (max-width: 480px) {
    width: 160px; /* Further reduce width for very small screens */
    height: 250px; /* Reduce height for smaller screens */
    top: 70px; /* Adjust top position for better alignment */
    right: 10px; /* Adjust right position */
    padding: 15px; /* Less padding on small screens */
  }

  @media screen and (max-width: 320px) {
    width: 140px; /* Make the dropdown even smaller on extra small screens */
    height: 220px; /* Adjust height */
    top: 60px; /* Adjust the position */
    right: 5px; /* Adjust right position */
    padding: 10px; /* Further reduce padding */
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  /* Adjust font size for small screens */
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  /* Adjust cart items' height for smaller screens */
  @media screen and (max-width: 480px) {
    height: 180px;
  }

  @media screen and (max-width: 320px) {
    height: 150px;
  }
`;

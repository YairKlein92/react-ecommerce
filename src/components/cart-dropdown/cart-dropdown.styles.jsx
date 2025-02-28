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

  @media screen and (max-width: 768px) {
    width: 200px;
    height: 300px;
    top: 80px;
    right: 20px;
  }

  @media screen and (max-width: 480px) {
    width: 160px;
    height: 250px;
    top: 70px;
    right: 10px;
    padding: 15px;
  }

  @media screen and (max-width: 320px) {
    width: 140px;
    height: 220px;
    top: 60px;
    right: 5px;
    padding: 10px;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  @media screen and (max-width: 480px) {
    height: 180px;
  }

  @media screen and (max-width: 320px) {
    height: 150px;
  }
`;

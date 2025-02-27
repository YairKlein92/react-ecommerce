import styled from 'styled-components';
import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  /* text-transform: uppercase; */
  font-size: 12px;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  /* Responsive adjustments */
  @media screen and (max-width: 768px) {
    min-width: 140px; /* Reduce the minimum width on smaller screens */
    height: 45px; /* Reduce the height */
    padding: 0 25px; /* Reduce padding */
    font-size: 10px; /* Reduce font size */
  }

  @media screen and (max-width: 480px) {
    min-width: 120px; /* Further reduce the width on mobile */
    height: 40px; /* Adjust the height for small screens */
    padding: 0 20px; /* Reduce padding further */
    font-size: 8px; /* Further reduce font size */
  }

  @media screen and (max-width: 320px) {
    min-width: 100px; /* Further reduce minimum width for very small screens */
    height: 35px; /* Adjust height */
    padding: 0 15px; /* Reduce padding for smaller screens */
    font-size: 8px; /* Reduce font size for small screens */
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;

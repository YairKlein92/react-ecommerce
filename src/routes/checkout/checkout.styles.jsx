import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  // Responsive for tablets and smaller screens
  @media screen and (max-width: 768px) {
    width: 80%;
  }

  // Responsive for mobile screens
  @media screen and (max-width: 480px) {
    width: 100%;
    margin-top: 30px;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  // Media query for smaller screens
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  // Media query for mobile screens
  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 0;
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  // Media query for tablets and below
  @media screen and (max-width: 768px) {
    width: 30%;
    font-size: 16px;
  }

  // Media query for mobile screens
  @media screen and (max-width: 480px) {
    width: 100%;
    text-align: left;
    margin-bottom: 10px;

    display: none;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  // Media query for smaller screens
  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-top: 20px;
  }

  // Media query for mobile screens
  @media screen and (max-width: 480px) {
    font-size: 16px;
    margin-top: 15px;
  }
`;

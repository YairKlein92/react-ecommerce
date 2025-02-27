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
    width: 80%; /* Increase width on smaller screens */
  }

  // Responsive for mobile screens
  @media screen and (max-width: 480px) {
    width: 100%; /* Take up full width on mobile */
    margin-top: 30px; /* Reduce margin-top for smaller screens */
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
    font-size: 18px; /* Reduce font size on tablets */
  }

  // Media query for mobile screens
  @media screen and (max-width: 480px) {
    flex-direction: column; /* Stack header elements on mobile */
    align-items: flex-start; /* Align to the left on mobile */
    padding: 20px 0; /* More padding for better spacing on mobile */
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%; /* Default width for large screens */

  &:last-child {
    width: 8%; /* The last block (usually for actions or remove) gets smaller width */
  }

  // Media query for tablets and below
  @media screen and (max-width: 768px) {
    width: 30%; /* Increase width for each block on tablets */
    font-size: 16px; /* Reduce font size on tablets */
  }

  // Media query for mobile screens
  @media screen and (max-width: 480px) {
    width: 100%; /* Stack the blocks vertically on mobile */
    text-align: left; /* Align text to the left */
    margin-bottom: 10px; /* Space out the blocks on mobile */

    /* Hide the HeaderBlock on mobile */
    display: none;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  // Media query for smaller screens
  @media screen and (max-width: 768px) {
    font-size: 20px; /* Reduce font size on tablets */
    margin-top: 20px;
  }

  // Media query for mobile screens
  @media screen and (max-width: 480px) {
    font-size: 16px; /* Reduce font size further on mobile */
    margin-top: 15px;
  }
`;

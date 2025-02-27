import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  // Media query for smaller screens (tablets and below)
  @media screen and (max-width: 768px) {
    font-size: 18px; /* Reduce font size on tablets */
    padding: 10px 0; /* Reduce padding on smaller screens */
  }

  // Media query for small screens (mobile)
  @media screen and (max-width: 480px) {
    flex-direction: row; /* Stack the items vertically */
    font-size: 12px; /* Reduce font size even more for mobile */
    padding: 8px 0; /* Reduce padding on mobile */
    align-items: center; /* Align items to the left */
    justify-content: center;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 768px) {
    width: 30%; /* Slightly increase image width on tablets */
  }

  @media screen and (max-width: 480px) {
    display: none;
    width: 40%; /* Increase image width on mobile */
    padding-right: 0; /* Remove right padding */
    margin-bottom: 10px; /* Add some margin to space out from other elements */
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
  text-align: center; /* Align text to the left */

  @media screen and (max-width: 768px) {
    width: 30%; /* Adjust width on tablets */
  }

  @media screen and (max-width: 480px) {
    width: 100%; /* Stack spans on mobile */
    margin-bottom: 10px; /* Add margin to separate from other elements */
    font-size: 14px; /* Smaller font size on mobile */
  }
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
  justify-content: center; /* Center the quantity controls */
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    padding-left: 0; /* Reduce padding on mobile */
    margin-top: 10px; /* Add margin to the top to give space when stacking */
  }
`;

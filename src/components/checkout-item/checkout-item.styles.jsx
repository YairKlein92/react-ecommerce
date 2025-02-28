import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    padding: 10px 0;
  }

  @media screen and (max-width: 480px) {
    flex-direction: row;
    font-size: 12px;
    padding: 8px 0;
    align-items: center;
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
    width: 30%;
  }

  @media screen and (max-width: 480px) {
    display: none;
    width: 40%;
    padding-right: 0;
    margin-bottom: 10px;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
  text-align: center;

  @media screen and (max-width: 768px) {
    width: 30%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
  justify-content: center;
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
    padding-left: 0;
    margin-top: 10px;
  }
`;

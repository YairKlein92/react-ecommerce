import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Container for the entire navigation bar
export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 256px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: auto;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 50px;
  padding: 25px;

  @media screen and (max-width: 768px) {
    width: 50px;
    padding: 15px;
  }

  @media screen and (max-width: 480px) {
    width: 10px;
    padding: 2px;
  }

  @media screen and (max-width: 256px) {
    width: 40px;
    padding: 5px;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 256px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
  }
`;

// Styling for individual navigation links
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  @media screen and (max-width: 256px) {
    padding: 5px 10px;
  }
`;

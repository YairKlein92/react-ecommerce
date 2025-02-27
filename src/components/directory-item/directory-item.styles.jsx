import styled from 'styled-components';

// Background image for the directory item
export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

// Body content for the directory item (text part)
export const Body = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }

  /* Responsive design */
  @media screen and (max-width: 768px) {
    height: 80px; /* Reduce height on smaller screens */
    padding: 0 15px; /* Reduce padding */

    h2 {
      font-size: 20px; /* Slightly smaller font size for headings */
    }

    p {
      font-size: 14px; /* Smaller text on smaller screens */
    }
  }

  @media screen and (max-width: 480px) {
    height: 70px; /* Further reduce height on mobile */
    padding: 0 10px; /* Less padding on mobile */

    h2 {
      font-size: 18px; /* Further reduce font size for small screens */
    }

    p {
      font-size: 12px; /* Smaller font size for paragraph */
    }
  }
`;

// Directory item container that holds the background and body
export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${Body} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  // Media query for small screens (mobile)
  @media screen and (max-width: 768px) {
    min-width: 45%; // On smaller screens, make each item take up 45% of the container width
    height: 200px; // Slightly reduce the height
  }

  // Media query for very small screens (mobile phones)
  @media screen and (max-width: 480px) {
    min-width: 100%; // On mobile phones, each item should take up 100% of the container width
    height: 180px; // Adjust height for mobile

    margin: 0 0 15px 0; // Remove side margins and add margin-bottom
  }
`;

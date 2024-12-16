import {BackgroundImage, DirectoryItemContainer, Body} from './directory-item.styles';
//instead of turning DirectoryItemContainer into a Link
import { useNavigate } from 'react-router-dom';
// elements on the homepage

const DirectoryItem = ({ category }) => {
  // only (imageUrl, title) directly in the parameter list will not work because the imageUrl and title properties are inside the category object
  // object destructuring in case only {category} is written:
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

   const onNavigateHandler = () => navigate(route)


  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage
        //because of the styled component:
        imageUrl={imageUrl}
        // style={{
        //   backgroundImage: `url(${imageUrl})`,
        // }}
      />
      <Body>
        <h2>{title}</h2>
        <p>Shop</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;

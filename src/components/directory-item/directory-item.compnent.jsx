import {BackgroundImage, DirectoryItemContainer, Body} from './directory-item.styles';

// elements on the homepage

const DirectoryItem = ({ category: { imageUrl, title } }) => {
  // only (imageUrl, title) directly in the parameter list will not work because the imageUrl and title properties are inside the category object
  // object destructuring in case only {category} is written:
  // const { imageUrl, title } = category;

  return (
    <DirectoryItemContainer>
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

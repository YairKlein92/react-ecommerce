import './directory-item.styles.scss';

// elements on the homepage

const DirectoryItem = ({ category: { imageUrl, title } }) => {
  // only (imageUrl, title) directly in the parameter list will not work because the imageUrl and title properties are inside the category object
  // object destructuring in case only {category} is written:
  // const { imageUrl, title } = category;

  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop</p>
      </div>
    </div>
  );
};

export default DirectoryItem;

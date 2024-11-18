import './category-item.styles.scss';

const CategoryItem = ({ category: { imageUrl, title } }) => {
  // only (imageUrl, title) directly in the parameter list will not work because the imageUrl and title properties are inside the category object
  // object destructuring in case only {category} is written:
  // const { imageUrl, title } = category;

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop</p>
      </div>
    </div>
  );
};

export default CategoryItem;

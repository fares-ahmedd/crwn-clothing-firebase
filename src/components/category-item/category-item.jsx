import "./category-item.styles.scss";

function CategoryItem({ category }) {
  const { id, imageUrl, title } = category;
  return (
    <div className="category-container " key={id}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop now</p>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;

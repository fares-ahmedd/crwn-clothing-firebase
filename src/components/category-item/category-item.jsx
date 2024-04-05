import { Link } from "react-router-dom";
import "./category-item.styles.scss";

function CategoryItem({ category }) {
  const { id, imageUrl, title } = category;
  return (
    <Link className="category-container " key={id} to={`/shop/${title}`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop now</p>
        </div>
      </div>
    </Link>
  );
}

export default CategoryItem;

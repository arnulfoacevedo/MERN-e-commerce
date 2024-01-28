import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
    <div className="imgcontainer">
    <img className="productImg" src={product.images[0].url} alt={product.name} />

    </div>
<div className="nameContainer">      <p className="productName">{product.name}</p>
</div>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`Rs ${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;

import React from "react";

const ProductRow = ({product}) => {
  const name = product.stocked ? product.name : <span className="text-red-600 ">{product.name}</span>
  const price = product.stocked ? (
    product.price
  ) : (
    <span className="text-red-600 ">{product.price}</span>
  );
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;

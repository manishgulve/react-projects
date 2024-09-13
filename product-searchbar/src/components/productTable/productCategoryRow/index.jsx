import React from "react";

const ProductCategoryRow = ({ category }) => {
  console.log("category: ", category);

  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
};

export default ProductCategoryRow;

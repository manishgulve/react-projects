import React from "react";
import ProductCategoryRow from "./productCategoryRow";
import ProductRow from "./productRow";


function ProductTable() {


  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductCategoryRow
        />
        <ProductRow />
      </tbody>
    </table>
  );
}

export default ProductTable;

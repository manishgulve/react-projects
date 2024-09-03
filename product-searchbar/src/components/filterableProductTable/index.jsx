
import ProductTable from "../productTable";
import SearchBar from "../searchBar";

const FilterableProductTable = ({ products }) => {
  return (
    <div className="p-4">
      <SearchBar/>
      <ProductTable />
    </div>
  );
};

export default FilterableProductTable;

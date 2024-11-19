import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import FilterOptions from "./FilterOptions";

const FilterBar = ({ filterBarToggle, handleFilterBar }) => {
  const resultData = useSelector((state) => state.dataReducer);
  const dialogModal = useRef();

  console.log(resultData);

  const getFacet = (facetCode) => {
    return resultData?.facets?.find((item) => item.code === facetCode);
  };

  const categoriesFacet = getFacet("categories");
  const brandsFacet = getFacet("brands");
  const ratingsFacet = getFacet("ratings");
  const sizesFacet = getFacet("sizes");
  const colorsFacet = getFacet("colorWithNames");

  useEffect(() => {
    if (filterBarToggle) {
      dialogModal?.current?.showModal();
    } else {
      dialogModal?.current?.close();
    }
  }, [filterBarToggle]);

  return (
    <>
      {filterBarToggle && (
        <dialog
          ref={dialogModal}
          className="fixed left-3/4 border-none p-3 rounded-lg"
        >
          <button
            className="outline outline-1 outline-neutral-900 p-1"
            onClick={handleFilterBar}
          >
            Close
          </button>
          <FilterOptions facetName={"Category"} facet={categoriesFacet} />
          <FilterOptions facetName={"Brand"} facet={brandsFacet} />
          <FilterOptions facetName={"Rating"} facet={ratingsFacet} />
          <FilterOptions facetName={"Size"} facet={sizesFacet} />
          <FilterOptions facetName={"Color"} facet={colorsFacet} />
        </dialog>
      )}
    </>
  );
};

export default FilterBar;

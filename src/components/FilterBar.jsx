import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import FilterOptions from "./FilterOptions";

const FilterBar = ({ filterBarToggle, handleFilterBar }) => {
  const resultData = useSelector((state) => state.dataReducer);
  const dialogModal = useRef();

  const [toggleFacet, setToggleFacet] = useState({
    Category: false,
    Brand: false,
    Rating: false,
    Size: false,
    Color: false,
  });

  const getFacet = (facetCode) => {
    return resultData?.facets?.find((item) => item.code === facetCode);
  };

  const handleFacetToggle = (section) => {
    setToggleFacet((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const shouldShowFacet = (facet) => {
    return facet?.values?.some((value) => value.count !== 0);
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
    <div>
      {filterBarToggle && (
        <dialog
          ref={dialogModal}
          className="left-[79%] h-full w-96 border-none outline outline-1 outline-neutral-200 rounded p-3"
        >
          <div className="flex justify-between mb-5">
            <p className="text-2xl text-neutral-800 font-semibold">Filter</p>
            <button onClick={handleFilterBar}>X</button>
          </div>
          {shouldShowFacet(categoriesFacet) && (
            <FilterOptions
              facetName={"Category"}
              facet={categoriesFacet}
              handleFacetToggle={handleFacetToggle}
              toggleFacet={toggleFacet}
            />
          )}
          {shouldShowFacet(brandsFacet) && (
            <FilterOptions
              facetName={"Brand"}
              facet={brandsFacet}
              handleFacetToggle={handleFacetToggle}
              toggleFacet={toggleFacet}
            />
          )}
          {shouldShowFacet(ratingsFacet) && (
            <FilterOptions
              facetName={"Rating"}
              facet={ratingsFacet}
              handleFacetToggle={handleFacetToggle}
              toggleFacet={toggleFacet}
            />
          )}
          {shouldShowFacet(sizesFacet) && (
            <FilterOptions
              facetName={"Size"}
              facet={sizesFacet}
              handleFacetToggle={handleFacetToggle}
              toggleFacet={toggleFacet}
            />
          )}
          {shouldShowFacet(colorsFacet) && (
            <FilterOptions
              facetName={"Color"}
              facet={colorsFacet}
              handleFacetToggle={handleFacetToggle}
              toggleFacet={toggleFacet}
            />
          )}
        </dialog>
      )}
    </div>
  );
};

export default FilterBar;

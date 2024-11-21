import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterOptions from "./FilterOptions";
import { setParam } from "../actions/filterActions";
import { IonIcon } from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import PriceSlider from "./PriceSlider";

const FilterBar = ({ filterBarToggle, handleFilterBar }) => {
  const resultData = useSelector((state) => state.dataReducer);
  const dialogModal = useRef();
  const dispatch = useDispatch();
  const paramsData = useSelector((state) => state.paramsReducer);
  const ratingParam = paramsData?.ratings;
  const minPrice = resultData?.others?.minPrice;
  const maxPrice = resultData?.others?.maxPrice;

  const [toggleFacet, setToggleFacet] = useState({
    Category: false,
    Brand: false,
    Size: false,
    Color: false,
  });

  const handleRangeChange = (values) => {
    dispatch(setParam("priceRange", values));
  };

  const handleRating = (rating) => {
    dispatch(setParam("ratings", rating));
  };

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
          className="p-3 ml-auto top-1/2 transform -translate-x-0 -translate-y-1/2  h-full w-96 border-none outline outline-1 outline-neutral-200 rounded-l-lg shadow-lg"
        >
          <div className="flex justify-between mb-5 items-center">
            <p className="text-base text-neutral-600 font-medium">
              {`${resultData?.others?.totalProducts}`} Results
            </p>
            <p className="text-2xl text-neutral-800 font-semibold">Filter</p>
            <button className="text-2xl" onClick={handleFilterBar}>
              <IonIcon icon={closeOutline}> </IonIcon>
            </button>
          </div>
          <div className="flex flex-col mb-8">
            <div className="mb-5">
              <p className="font-medium text-lg mb-2">Price Range</p>
              <PriceSlider
                min={minPrice}
                max={maxPrice}
                onChange={handleRangeChange}
              />
            </div>
            <p className="font-medium text-lg">Rating</p>
            <div className="flex flex-col items-center">
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    onClick={() => handleRating(star)}
                    className={`text-3xl ${
                      star <= ratingParam ? "text-yellow-400" : "text-gray-400"
                    }`}
                  >
                    ★
                  </button>
                ))}
              </div>
              {ratingParam > 0 && (
                <p className="mt-2 text-base text-neutral-800 font-medium">
                  {ratingParam} & above
                </p>
              )}
            </div>
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

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setParam } from "../actions/filterActions";
import FilterBar from "./FilterBar.jsx";
import { IonIcon } from "@ionic/react";
import { filterOutline, optionsOutline } from "ionicons/icons";

const ActionPanel = () => {
  const [sortToggle, setSortToggle] = useState(false);
  const [filterBarToggle, setFilterBarToggle] = useState(false);
  const paramsData = useSelector((state) => state.paramsReducer);
  const dispatch = useDispatch();

  const handleFilterBar = () => {
    setFilterBarToggle((prevState) => !prevState);
  };

  const handleSortToggle = () => {
    setSortToggle((prevState) => !prevState);
  };

  const handleSortChange = (filter, e) => {
    dispatch(setParam(filter, e.target.value));
  };

  const handleRating = (filter, value) => {
    dispatch(setParam(filter, value));
  };

  const handleChange = (filter, value) => {
    const currentValues = paramsData[filter] || [];
    const updatedValues = currentValues.includes(value)
      ? currentValues.filter((val) => val !== value)
      : [...currentValues, value];

    dispatch(setParam(filter, updatedValues));
  };

  return (
    <div className="flex flex-col mt-10 py-3 w-auto">
      <div className="flex justify-between">
        <div className="relative">
          <div className="flex items-center">
            <button
              className="font-semibold text-lg  text-neutral-700"
              onClick={handleSortToggle}
            >
              Sort by
              <IonIcon
                className="ml-2 text-xl text-neutral-700"
                icon={filterOutline}
              ></IonIcon>
            </button>
          </div>
          {sortToggle && (
            <div className="absolute z-auto top-8 w-52 p-2 bg-white outline outline-1 outline-neutral-200 flex flex-col gap-4 text-base text-neutral-800 rounded">
              <label className="flex items-center">
                <input
                  className="mr-2 h-4 w-4"
                  type="radio"
                  value="stock"
                  checked={paramsData.sortBy === "stock"}
                  onChange={(e) => {
                    handleSortChange("sortBy", e);
                  }}
                />
                <span>Recommended</span>
              </label>
              <label className="flex items-center">
                <input
                  className="mr-2 h-4 w-4"
                  type="radio"
                  value="ascPrice"
                  checked={paramsData.sortBy === "ascPrice"}
                  onChange={(e) => {
                    handleSortChange("sortBy", e);
                  }}
                />
                <span>Low to High</span>
              </label>
              <label className="flex items-center">
                <input
                  className="mr-2 h-4 w-4"
                  type="radio"
                  value="descPrice"
                  checked={paramsData.sortBy === "descPrice"}
                  onChange={(e) => {
                    handleSortChange("sortBy", e);
                  }}
                />
                <span>High to Low</span>
              </label>
            </div>
          )}
        </div>
        <div className="flex  items-center">
          <button
            className="ml-auto font-semibold text-lg items-center text-neutral-700"
            onClick={handleFilterBar}
          >
            Filters
            <IonIcon
              className="ml-2 text-xl text-neutral-700"
              icon={optionsOutline}
            ></IonIcon>
          </button>
        </div>
      </div>
      <div className="flex gap-1">
        {Object.entries(paramsData).map(([facetCode, facetValues]) =>
          facetCode !== "sortBy" &&
          facetCode === "ratings" &&
          facetValues > 0 ? (
            <div className="flex items-center gap-1 py-2 px-4 outline outline-1 bg-white rounded outline-neutral-200">
              <p className="text-neutral-600 font-medium text-base">Rating</p>
              <button
                className="p-1"
                onClick={() => handleRating(facetCode, 0)}
              >
                X
              </button>
            </div>
          ) : Array.isArray(facetValues) ? (
            facetValues?.map((value) => (
              <div className="flex items-center gap-1 py-2 px-4 outline outline-1 bg-white rounded outline-neutral-200">
                <p className="text-neutral-600 font-medium text-base">
                  {value}
                </p>
                <button
                  className="p-1"
                  onClick={() => handleChange(facetCode, value)}
                >
                  X
                </button>
              </div>
            ))
          ) : null
        )}
      </div>
      <FilterBar
        filterBarToggle={filterBarToggle}
        handleFilterBar={handleFilterBar}
      />
    </div>
  );
};

export default ActionPanel;

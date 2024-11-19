import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setParam } from "../actions/filterActions";
import FilterBar from "./FilterBar.jsx";

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

  const handleChange = (filter, value) => {
    const currentValues = paramsData[filter] || [];
    const updatedValues = currentValues.includes(value)
      ? currentValues.filter((val) => val !== value)
      : [...currentValues, value];

    dispatch(setParam(filter, updatedValues));
  };

  return (
    <div className="flex flex-col mt-10 py-3 w-auto border-2 border-neutral-800">
      <div className="flex justify-between">
        <div className="relative">
          <button className="outline outline-2" onClick={handleSortToggle}>
            Sort by
          </button>
          {sortToggle && (
            <div className="absolute z-auto top-6 p-2 bg-neutral-50 flex flex-col gap-2 text-base">
              <label>
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
              <label>
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
              <label>
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
        <button
          className="ml-auto px-2 py-1 bg-neutral-800 font-semibold text-base rounded text-neutral-50"
          onClick={handleFilterBar}
        >
          FILTERS
        </button>
      </div>
      <div className="flex gap-1">
        {Object.entries(paramsData).map(
          ([facetCode, facetValues]) =>
            facetCode !== "sortBy" &&
            facetValues.map((value) => (
              <div className="flex gap-1 p-2 outline-1 outline-neutral-700">
                <p>{value}</p>
                <button onClick={() => handleChange(facetCode, value)}>
                  X
                </button>
              </div>
            ))
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

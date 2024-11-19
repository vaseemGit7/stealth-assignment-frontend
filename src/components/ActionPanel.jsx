import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setParam } from "../actions/filterActions";

const ActionPanel = () => {
  const [sortToggle, setSortToggle] = useState(false);
  const paramsState = useSelector((state) => state.paramsReducer);
  const dispatch = useDispatch();

  const handleChange = (filter, e) => {
    dispatch(setParam(filter, e.target.value));
  };

  const handleSortToggle = () => {
    setSortToggle((prevState) => !prevState);
  };

  return (
    <div className="mt-10 py-3 w-auto border-2 border-neutral-800">
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
                checked={paramsState.sortBy === "stock"}
                onChange={(e) => {
                  handleChange("sortBy", e);
                }}
              />
              <span>Recommended</span>
            </label>
            <label>
              <input
                className="mr-2 h-4 w-4"
                type="radio"
                value="ascPrice"
                checked={paramsState.sortBy === "ascPrice"}
                onChange={(e) => {
                  handleChange("sortBy", e);
                }}
              />
              <span>Low to High</span>
            </label>
            <label>
              <input
                className="mr-2 h-4 w-4"
                type="radio"
                value="descPrice"
                checked={paramsState.sortBy === "descPrice"}
                onChange={(e) => {
                  handleChange("sortBy", e);
                }}
              />
              <span>High to Low</span>
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActionPanel;

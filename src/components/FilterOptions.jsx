import { useDispatch, useSelector } from "react-redux";
import { setParam } from "../actions/filterActions";

const FilterOptions = ({
  facetName,
  facet,
  handleFacetToggle,
  toggleFacet,
}) => {
  const paramsData = useSelector((state) => state.paramsReducer);
  const dispatch = useDispatch();

  const handleChange = (filter, value) => {
    const currentValues = paramsData[filter] || [];
    const updatedValues = currentValues.includes(value)
      ? currentValues.filter((val) => val !== value)
      : [...currentValues, value];

    dispatch(setParam(filter, updatedValues));
  };

  console.log(paramsData);

  return (
    <div className="flex flex-col">
      <div
        className="flex mb-2 justify-between items-center cursor-pointer"
        onClick={() => handleFacetToggle(facetName)}
      >
        <p className="font-medium text-lg">{facetName}</p>
      </div>
      {facet &&
        toggleFacet[facetName] &&
        facet.values.map(
          (option) =>
            option.count !== 0 && (
              <div
                key={option.code}
                className="flex justify-between items-center gap-3 mb-3"
              >
                <label className="flex items-center gap-2 text-base font-normal cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-5 w-5 rounded-sm accent-neutral-800"
                    value={option.code}
                    checked={
                      Array.isArray(paramsData[facet.code]) &&
                      paramsData[facet.code].includes(option.code)
                    }
                    onChange={() => handleChange(`${facet.code}`, option.code)}
                  />
                  {option.code}
                </label>
                <p className="text-base font-normal  text-neutral-700 rounded">
                  {option.count}
                </p>
              </div>
            )
        )}
    </div>
  );
};

export default FilterOptions;

const FilterOptions = ({ facetName, facet }) => {
  return (
    <div className="flex flex-col gap-3">
      <p className="font-medium text-base">{facetName}</p>
      {facet &&
        facet.values.map(
          (option) =>
            option.count !== 0 && (
              <div
                key={option.code}
                className="flex justify-between items-center gap-3"
              >
                <label className="flex items-center gap-2 text-base font-normal cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded-sm accent-neutral-800"
                    value={option.code}
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

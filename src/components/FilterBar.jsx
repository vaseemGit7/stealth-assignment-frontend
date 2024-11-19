import { useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const FilterBar = ({ filterBarToggle, handleFilterBar }) => {
  const resultData = useSelector((state) => state.dataReducer);
  const dialogModal = useRef();

  console.log(resultData);

  const getFacet = (facetCode) => {
    return resultData?.facets?.find((item) => item.code === facetCode);
  };

  const categoriesFacet = getFacet("categories");
  console.log(categoriesFacet);

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
          <p className="m-auto">Test</p>
        </dialog>
      )}
    </>
  );
};

export default FilterBar;

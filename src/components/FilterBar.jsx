import { useRef, useEffect } from "react";

const FilterBar = ({ filterBarToggle, handleFilterBar }) => {
  const dialogModal = useRef();

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

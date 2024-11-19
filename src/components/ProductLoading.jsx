const ProductLoading = () => {
  const skeletonCards = [];
  for (let i = 0; i < 12; i++) {
    skeletonCards.push(
      <div
        key={i}
        className="h-[31rem] flex flex-col justify-between gap-1 outline outline-1 outline-neutral-200 bg-slate-50  rounded-sm "
      >
        <div className="animate-pulse h-5/6 bg-neutral-300"></div>
        <div className="flex flex-col justify-between p-2">
          <div className="animate-pulse h-4 w-5/6 mt-2 bg-neutral-300 rounded"></div>
          <div className="animate-pulse h-4 w-1/5 mt-2 bg-neutral-300 rounded"></div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "10px",
      }}
      className="p-1"
    >
      {skeletonCards}
    </div>
  );
};

export default ProductLoading;

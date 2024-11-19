import { IonIcon } from "@ionic/react";
import { star } from "ionicons/icons";

const ProductCard = ({ product }) => {
  const color = product.color.split("_");
  console.log(color[0]);
  return (
    <>
      <div className="flex flex-col justify-between gap-1 outline outline-1 outline-neutral-200 bg-slate-50  rounded-sm hover:drop-shadow-md hover:scale-[1.02]">
        <img src="https://placehold.jp/300x350.png" />
        <div className="flex flex-col p-2 justify-between">
          <div className="flex items-baseline justify-between">
            <p className="text-base font-semibold text-neutral-800/95">
              {product.name}
            </p>
            <p className="text-sm font-medium text-neutral-700">
              {product.rating}
              <IonIcon className="ml-1" icon={star}></IonIcon>
            </p>
          </div>
          <p className="text-sm mb-1 font-medium text-neutral-600">
            {product.brand}
          </p>
          <p className="text-base font-semibold text-neutral-700">
            Rs. {product.price}
          </p>
          <div
            key={color}
            className="h-[0.625rem] w-[0.625rem] rounded-full outline outline-[0.5px] outline-neutral-800/25"
            style={{ backgroundColor: `#${color[0]}` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;

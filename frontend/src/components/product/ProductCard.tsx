import Wallpaper from "../../asserts/images/wallpaper.jpg";
import InlineLoader from "../shared/InlineLoader";

export const ProductCard = (props: any) => {
  const { data, onDelete } = props;
  return (
    <article className="flex gap-4 self-start p-4 border border-gray-300 rounded-lg shadow-md w-[400px]">
      {/* Product Image */}
      <div className="flex-1">
        <img
          src={Wallpaper}
          alt="Product Image"
          className="w-full h-[100px] object-cover rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="flex-2 flex flex-col justify-between">
        <div>
          <h5 className="text-lg font-bold m-0 break-words">{data.name}</h5>
          <p className="text-green-700 my-1">&#x20B9; {data.price}</p>

          <p className="text-gray-700 my-1">
            {" "}
            <span className="font-bold">Dealer:</span> {data.dealer}
          </p>

          <p className="text-gray-700 my-1">
            <span className="font-bold">Category:</span> {data.category}
          </p>
        </div>

        {/* Counter */}
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => {
              onDelete(data._id);
            }}
            aria-label="Delete Product"
            className="btn-error"
            disabled
          >
            Delete <InlineLoader />
          </button>

          <button aria-label="Edit  Product" className="btn-primary" disabled>
            Edit
          </button>
        </div>
      </div>
    </article>
  );
};

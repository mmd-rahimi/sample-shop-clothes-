import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image  */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title */}
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm font-medium uppercase max-w-[240px] text-black hover:underline"
            >
              {title}
            </Link>
            {/* remove icon  */}
            <div className=" cursor-pointer text-xl">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="bg-pink-200 flex gap-x-2 h-[36px] text-sm">
            {/* quantity  */}
            <div>quantity</div>
            {/* price  */}
            <div>price</div>
            {/* final price  */}
            <div>final price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

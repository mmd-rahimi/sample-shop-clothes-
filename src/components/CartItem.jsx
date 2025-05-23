import { useContext } from "react";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {

  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext)

  const { id, title, image, price, amount } = item;

  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
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
            <div onClick={() => removeFromCart(id)} className=" cursor-pointer text-xl">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">


            {/* quantity  */}
            <div className="flex felx-1 max-w-[100px] items-center h-full  text-black font-medium">
              {/* minus icon  */}
              <div onClick={() => decreaseAmount(id)} className="flex-1 h-full flex items-center justify-center cursor-pointer">
                <IoMdRemove />
              </div>

              {/* amount  */}
              <div className="flex h-full items-center justify-center px-2">{amount}</div>

              {/* plus icon  */}
              <div onClick={() => increaseAmount(id)} className="flex-1 h-full flex items-center justify-center cursor-pointer">
                <IoMdAdd />
              </div>
            </div>


            {/* price  */}
            <div className="flex-1 flex justify-around items-center">$ {price}</div>
            {/* final price  */}
            <div className="flex-1 flex justify-end items-center text-black font-medium">{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

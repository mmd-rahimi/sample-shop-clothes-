import { useContext } from "react";
import { BsEyeFill, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  console.log(product);

  const { id, image, title, category, price } = product;
  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* buttons */}
        <div
          className="absolute top-6 right-11 group-hover:right-5 flex flex-col justify-center 
        items-center gap-y-2 opacity-0 group-hover:opacity-100 p-2 transition-all duration-300"
        >
          <button>
            <div className="flex justify-center items-center text-white h-12 w-12 bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            className="w-12 h-12 bg-white flex justify-center items-center text-black drop-shadow-xl"
            to={`/product/${id}`}
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* category title price */};
      <div>
        <div className="text-sm capitalize to-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
        <h2 className="font-semibold mb1">{title}</h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
      ;
    </div>
  );
};

export default Product;

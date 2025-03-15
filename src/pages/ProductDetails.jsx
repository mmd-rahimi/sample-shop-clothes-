import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import { CartContext } from "../contexts/CartContext";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { CgSearchLoading } from "react-icons/cg";

const ProductDetails = () => {
  // get product id frol url
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  //   get the single product
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // if product does not found
  if (!product) {
    return (
      <section className="flex justify-center items-center h-screen">
        <CgSearchLoading className="text-5xl" />
      </section>
    );
  }

  const { title, image, price, description } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        {/* image and text wrapper  */}
        <div className="flex flex-col lg:flex-row items-center">
          {/* image  */}
          <div className="flex flex-1 items-center justify-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} />
          </div>
          {/* title  */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            {/* price  */}
            <div className="text-xl font-medium mb-6 text-red-500">
              $ {price}
            </div>
            {/* description  */}
            <p className="mb-8">{description}</p>
            {/* button  */}
            <button
              onClick={() => addToCart(product, product.id)}
              className="text-white max-w-[160px] bg-black py-4 px-8 rounded cursor-pointer"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;

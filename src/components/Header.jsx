import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  })

  return (
    <header className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"} fixed w-full z-10 transition-all`}>
      <div className="container flex mx-auto items-center justify-between h-full">
        {/* Logo  */}
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src="./public/logo.svg" />
          </div>
        </Link>
        {/* cart  */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative "
        >
          <BsBag className="text-2xl" />
          <div
            className="bg-red-400 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px]
         text-white rounded-full flex justify-center items-center"
          >
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

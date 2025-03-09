import { useContext } from "react";
import SidebarProvider, { SidebarContext } from "../contexts/SidebarContext";
import { IoMdArrowForward } from "react-icons/io";

const Sidebar = () => {

    const {isOpen, handleClose} = useContext(SidebarContext); 
    return(
        <div className={` ${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] 
        transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
            <div className="flex justify-between items-center py-6 border-b">
                <div className="uppercase text-sm font-semibold">Shopping Bag (0)</div>
                {/* icon  */}
                <div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center">
                    <IoMdArrowForward className="text-2xl" />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

const Sidebar = () => {

    const [isOpen, handleClose] = useContext(SidebarContext); 
    return(
        <div className={` ${isOpen ? 'right-0' : 'right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] 
        transition-all duration-300 z-20 px-4 lg:px-[35px]`}>Sidebar</div>
    )
}

export default Sidebar;
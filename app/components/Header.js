import { IoSearch } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { RiHandbagLine } from "react-icons/ri";
import Image from "next/image";

const Header = () => {
    return (
        <>
            <div className=" flex justify-between   items-center ">
                <span>
                    <Image
                        src="https://dev1-cdn.helioswatchstore.com/logo/stores/1/Helios_260px_x_25px_white_BG.gif"
                        alt="my image"
                        height={300}
                        width={300}
                    />
                </span>
                <div className="  w-1/4">
                    <u className="  flex justify-between  list-none  no-underline">
                        <li>Watch</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Smart</li>
                        <li>Brands</li>
                        <li>Store</li>
                        <li>offer</li>
                    </u>
                </div>
                <div className=" relative"><div ><input className="border   rounded-full  p-2" type="text" placeholder="Enter Brand name..." /></div><div className=" absolute   top-[14px]  right-[11px] "><IoSearch /></div></div>
                <div className="    w-20 flex  justify-between"> <div><FaUser /></div>
                    <div><FaHeart /></div>
                    <div><RiHandbagLine />
                    </div></div>
            </div>
        </>
    )
}

export default Header;

import { useState } from "react"
import { CiMenuFries } from "react-icons/ci";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"
import logo from "../assets/logo.png"



const Nav = () => {
    const [click, setClick]= useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">

            <ul className="text-center text-xl p-20">

                <Link spy={true} smooth={true} to="Home">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
                </Link>
                <Link spy={true} smooth={true} to="Partners">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Partners</li>
                </Link>
                <Link spy={true} smooth={true}  to="Services">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Services</li>
                </Link>
                <Link spy={true} smooth={true} to="Industries">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Industries</li>
                </Link>
                <Link spy={true} smooth={true} to="Training">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Training</li>
                </Link>
                <Link  spy={true} smooth={true} to="About">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
                </Link>
                <Link  spy={true} smooth={true} to="Contact">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
                </Link>
                
                 


            </ul>

        </div>

    </>
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-10 px-20 py-4">

            <div className="flex items-center flex-1">
                <div>
               <a href="/"><img src={logo} alt="Logo" className="logo-img w-full h-[10vh]" /></a>

                </div>
            </div>
            <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                <div className="flex-10">
                <ul className="flex gap-8 mr-16 text-[18px]">
                <Link  spy={true} smooth={true} to="Home">
                    <li className="hover:text-[#4AAEF1] transition border-b-2 border-slate-900 hover:border-[#4AAEF1] cursor-pointer">Home</li>
                </Link>
                <Link  spy={true} smooth={true} to="Partners">
                    <li className="hover:text-[#4AAEF1] transition border-b-2 border-slate-900 hover:border-[#4AAEF1] cursor-pointer">Partners</li>
                </Link>
                <Link  spy={true} smooth={true} to="Services">
                    <li className="hover:text-[#4AAEF1] transition border-b-2 border-slate-900 hover:border-[#4AAEF1] cursor-pointer">Services</li>
                </Link>
                <Link  spy={true} smooth={true} to="Industries">
                    <li className="hover:text-[#4AAEF1] transition border-b-2 border-slate-900 hover:border-[#4AAEF1] cursor-pointer">Industries</li>
                </Link>
                <Link  spy={true} smooth={true} to="Training">
                    <li className="hover:text-[#4AAEF1] transition border-b-2 border-slate-900 hover:border-[#4AAEF1] cursor-pointer">Training</li>
                </Link>
                <Link  spy={true} smooth={true} to="About">
                    <li className="hover:text-[#4AAEF1] transition border-b-2 border-slate-900 hover:border-[#4AAEF1] cursor-pointer">About</li>
                </Link>
                <Link  spy={true} smooth={true} to="Contact">
                    <li className="hover:text-[#4AAEF1] transition border-b-2 border-slate-900 hover:border-[#4AAEF1] cursor-pointer">Contact</li>
                </Link>
                
                </ul>
            </div>
            </div>
         <div>
        {click && content}
         </div>
         <button className="block sm:hidden transition" onClick={handleClick}>
            {click ? <FaTimes /> : <CiMenuFries/>}
         </button>

            </div>
        </nav>
    )
}

export default Nav
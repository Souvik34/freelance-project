
import { Link } from "react-scroll"


const Nav = () => {
    const content = <>
        <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">

            <ul className="text-center text-xl p-20">

                <Link to="Home">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li>
                </Link>
                <Link to="Partners">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Partners</li>
                </Link>
                <Link to="Services">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Services</li>
                </Link>
                <Link to="Industries">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Industries</li>
                </Link>
                <Link to="Training">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Training</li>
                </Link>
                <Link to="About">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">About</li>
                </Link>
                <Link to="Contact">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li>
                </Link>
                
                 


            </ul>

        </div>

    </>
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">

            <div className="flex items-center flex-1">
                <span className="text-3xl font-bold">Logo</span>
            </div>
            <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
                <div className="flex-10">
                <ul className="flex gap-8 mr-16 text-[18px]">
                <Link to="Home">
                    <li>Home</li>
                </Link>
                <Link to="Partners">
                    <li>Partners</li>
                </Link>
                <Link to="Services">
                    <li>Services</li>
                </Link>
                <Link to="Industries">
                    <li>Industries</li>
                </Link>
                <Link to="Training">
                    <li>Training</li>
                </Link>
                <Link to="About">
                    <li>About</li>
                </Link>
                <Link to="Contact">
                    <li>Contact</li>
                </Link>
                
                </ul>
            </div>
            </div>
            </div>
        </nav>
    )
}

export default Nav
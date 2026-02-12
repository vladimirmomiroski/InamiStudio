import Logo from "@/app/shared/ui/logo/logo"
import NavLink from "@/app/shared/ui/nav-link/nav-link"

const Navbar = () => {
    return (
        <nav>
            <div className="container flex justify-between items-center px-4 py-2 mx-auto">
                <div>
                    <Logo width={250} height={250} src={"/assets/images/inami_logo.png"} />
                </div >
                <div>
                    <ul className="flex justify-between align-middle">
                        <li className="mr-5 text-medium"><NavLink href="/" color="text-black">Home</NavLink></li>
                        <li className=" mr-5 text-medium"><NavLink href="#services" color="text-black" >Services</NavLink></li>
                        <li className="mr-5 text-medium"><NavLink href="#about" color="text-black">About</NavLink></li>
                        <li className="text-medium"><NavLink href="#contact" color="text-black">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav >
    )
}

export default Navbar

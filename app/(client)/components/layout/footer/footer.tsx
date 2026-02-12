import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Logo from '@/app/shared/ui/logo/logo'
import NavLink from '@/app/shared/ui/nav-link/nav-link'


const Footer = () => {

    const year: number = new Date().getFullYear()

    return (
        <footer className={"pb-10 bg-black"}>
            <section className='text-center text-black bg-gradient-to-r from-orange to-red py-6'>
                <h2 className='px-10 text-extra-large text-white'>Supercharged Digital Growth For Your Business</h2>
            </section>
            <section className="border-b-2 border-yellow text-center">
                <div className='flex justify-center py-12'>
                    <Logo width={300} height={300} src='/assets/images/inami_logo.png' />
                </div>
                <ul className="flex-col md:flex-row flex justify-center items-center pb-7">
                    <li className="text-medium text-white hover:text-orange hover:transition-all hover:duration-200 hover:ease-in-out mx-6 pb-1 md:pb-0"><NavLink href="#home" color="text-white" >Home</NavLink></li>
                    <li className="text-medium text-white hover:text-orange hover:transition-all hover:duration-200 hover:ease-in-out mx-6 pb-1 md:pb-0"><NavLink href="#blog" color="text-white">Services</NavLink></li>
                    <li className="text-medium text-white hover:text-orange hover:transition-all hover:duration-200 hover:ease-in-out mx-6 pb-2 md:pb-0"><NavLink href="#contact" color="text-white">About</NavLink></li>
                    <li className="text-medium text-white hover:text-orange hover:transition-all hover:duration-200 hover:ease-in-out mx-6 pb-2 md:pb-0"><NavLink href="#about" color="text-white">Contact</NavLink></li>

                </ul>
            </section>
            <section className={"border-b-2 border-yellow"}>
                <div className={"w-4/5 flex-col md:flex-row flex justify-between items-center py-7 mx-auto"}>
                    <p className="text-white text-small mb-5 md:mb-0">Copyright © {year} <strong><i>Inami Studio</i></strong></p>
                    <div className='flex'>
                        <a><FontAwesomeIcon
                            icon={faInstagram}
                            className="w-7 h-7 mr-3 text-white hover:text-orange cursor-pointer transition-all duration-200 ease-in-out"
                        /></a>
                        <a><FontAwesomeIcon
                            icon={faFacebook}
                            className="w-7 h-7 mr-3 text-white hover:text-orange cursor-pointer transition-all duration-200 ease-in-out"
                        /></a>
                        <a><FontAwesomeIcon
                            icon={faTiktok}
                            className="w-7 h-7 mr-3 text-white hover:text-orange cursor-pointer transition-all duration-200 ease-in-out"
                        /></a>
                        <a><FontAwesomeIcon
                            icon={faYoutube}
                            className="w-7 h-7 mr-3 text-white hover:text-orange cursor-pointer transition-all duration-200 ease-in-out"
                        /></a>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer;
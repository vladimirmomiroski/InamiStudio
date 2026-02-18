'use client';

import { useState } from 'react';
import Logo from "@/app/shared/ui/logo/logo"
import NavLink from "@/app/shared/ui/nav-link/nav-link"
import { useActiveSection } from "@/app/(client)/hooks/useActiveSection"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const activeSection = useActiveSection(['services', 'testimonials', 'about', 'contact']);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="py-3 border-b border-black/5 sticky top-0 z-50 backdrop-blur-lg bg-white/95">
            <div className="container flex justify-between items-center px-6 py-4 mx-auto">
                {/* Logo */}
                <div className="flex items-center">
                    <Logo width={160} height={160} src={"/assets/images/inami.png"} />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <NavLink href="#services" color="text-black" isActive={activeSection === '#services'}>
                        Services
                    </NavLink>
                     <NavLink href="#testimonials" color="text-black" isActive={activeSection === '#testimonials'}>
                        Testimonials
                    </NavLink>
                    <NavLink href="#about" color="text-black" isActive={activeSection === '#about'}>
                        About
                    </NavLink>
                    <a
                        href="#contact"
                        className="bg-green text-black font-montserrat font-bold text-small px-6 py-3 rounded-lg hover:opacity-90 hover:shadow-lg hover:shadow-green/20 transition-all duration-300 uppercase tracking-wide"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center group"
                    aria-label="Toggle menu"
                >
                    <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : 'group-hover:bg-green'}`}></span>
                    <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'group-hover:bg-green'}`}></span>
                    <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : 'group-hover:bg-green'}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-black/5 px-6 py-6 flex flex-col gap-6">
                    <NavLink href="#services" color="text-black" isActive={activeSection === '#services'} onClick={closeMenu}>
                        Services
                    </NavLink>
                    <NavLink href="#testimonials" color="text-black" isActive={activeSection === '#testimonials'} onClick={closeMenu}>
                        Testimonials
                    </NavLink>
                    <NavLink href="#about" color="text-black" isActive={activeSection === '#about'} onClick={closeMenu}>
                        About
                    </NavLink>
                    <a
                        href="#contact"
                        onClick={closeMenu}
                        className="bg-green text-black font-montserrat font-bold text-small px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 uppercase tracking-wide text-center"
                    >
                        Contact
                    </a>
                </div>
            )}
        </nav>
    )
}

export default Navbar
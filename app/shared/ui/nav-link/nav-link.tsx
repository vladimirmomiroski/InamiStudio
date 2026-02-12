'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';


type NavLinkProps = {
    href: string,
    children: React.ReactNode,
    color: string,
    target?: string
}

const NavLink = ({ href, children, color, target }: NavLinkProps) => {

    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} target={target} className={`cursor-pointer hover:text-green ${isActive ? 'text-green' : color
            }`}>
            {children}
        </Link>
    )
}

export default NavLink
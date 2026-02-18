'use client';

import Link from 'next/link';

type NavLinkProps = {
    href: string;
    children: React.ReactNode;
    color: string;
    target?: string;
    isActive?: boolean;
    onClick?: () => void;
};

const NavLink = ({ href, children, target, isActive, onClick }: NavLinkProps) => {
    return (
        <Link
            href={href}
            target={target}
            onClick={onClick}
            className={`font-montserrat text-default transition-colors duration-300 relative group ${
                isActive ? 'text-green' : 'text-black hover:text-green'
            }`}
        >
            {children}
        </Link>
    );
};

export default NavLink;
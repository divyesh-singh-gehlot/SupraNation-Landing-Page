import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const links = [
        { href: '#hero', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#cars', label: 'Cars' },
        { href: '#parts', label: 'Parts' },
        { href: '#blogs', label: 'Blogs' },
    ];

    return (
        <div className="flex justify-between items-center blur-nav">
            <div>
                <h1 className="text-xl ml-2 md:ml-3 md:mt-1 md:mb-2 md:text-3xl font-mono font-bold">SupraNation</h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:gap-5 md:mr-3 md:mt-2 md:mb-4 md:text-xl md:font-mono md:bg-transparent md:z-10 lg:flex lg:gap-5 lg:mr-3 lg:mt-2 lg:mb-4 lg:text-xl lg:font-mono lg:bg-transparent lg:z-10">
                {links.map((link) => (
                    <AnchorLink
                        key={link.href}
                        href={link.href}
                        className="hover:text-red-700 hover:border-b-4 hover:border-red-700"
                    >
                        <button className="cursor-pointer">{link.label}</button>
                    </AnchorLink>
                ))}
            </div>

            <button
                className="flex font-mono font-bold md:hidden mr-3"
                onClick={toggleMenu}
                aria-label="Toggle Navigation Menu"
            >
                Navbar
            </button>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="flex flex-col gap-3 mt-2 mb-4 text-xl font-mono md:hidden z-10 absolute top-full right-3 p-4 rounded-md shadow-lg bg-black">
                    {links.map((link) => (
                        <AnchorLink
                            key={link.href}
                            href={link.href}
                            className="hover:text-red-700 hover:border-b-4 hover:border-red-700"
                            onClick={() => setIsOpen(false)} // Close menu on link click
                        >
                            <button className="cursor-pointer">{link.label}</button>
                        </AnchorLink>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navigation;

"use client";

import { useState } from 'react';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="text-white">
            <div className="flex justify-end m-auto max-w-3xl items-center p-4">
                <button className="md:hidden text-white focus:outline-none" onClick={toggleMenu}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                    </svg>
                </button>
            </div>
            <nav className={`w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:block`}>
                <ul className="flex flex-col md:flex-row justify-center text-center md:text-left pb-3 size-full font-bold space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0 p-4 md:p-0">
                    <li>
                        <a href="/" className="text-white">Theo</a>
                    </li>
                    <li>
                        <a href="#projects" className="text-teal-600 hover:text-teal-400">Project</a>
                    </li>
                    <li>
                        <a href="#education" className="text-teal-600 hover:text-teal-400">Education</a>
                    </li>
                    <li>
                        <a href="#contact" className="text-teal-600 hover:text-teal-400">Contact</a>
                    </li>
                    <li>
                        <a href="https://github.com/TheoSauval" className="text-teal-600 hover:text-teal-400" target='_blanck'>GitHub</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

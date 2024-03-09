'use client'
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';

import './style.css';
import { Kategorie } from './const';


// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const isDesktop = useMediaQuery({ minWidth: 769 });

//     const toggleMenu = () => setIsOpen(!isOpen);

//     return (
//         <nav className="navbar">
//             {!isDesktop && (
//                 <button className="hamburger" onClick={toggleMenu}>
//                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" className="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>
//                 </button>
//             )}
//             {(isDesktop || isOpen) && (
//                 <ul className="menu">
//                     <li><Link href="#home">Home</Link></li>
//                     <li><Link href="#about">About</Link></li>
//                     <li><Link href="#services">Services</Link></li>
//                     <li><Link href="#contact">Contact</Link></li>
//                 </ul>
//             )}
//         </nav>
//     );
// };
// export default Navbar
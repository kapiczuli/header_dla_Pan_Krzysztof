'use client'
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import { Kategorie } from './const';
import Gorny from './gorny';
import Srodkowy from './srodkowy';
import { motion } from 'framer-motion';
import './style.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isDesktop = useMediaQuery({ minWidth: 768 });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <>
            
                {!isDesktop && (
                    <button className="hamburger" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" className="bi bi-list" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg>
                    </button>
                )}
                {(isOpen) && (
                    <>
                    
                    <nav className="navbar">
                        <div>
                            <div className='wszystko'>
                                <div className='d_duzy'>
                                    <div className='widac'>
                                        <div className='lewo'>
                                            <Gorny></Gorny>
                                        </div>
                                        <button onClick={toggleDropdown} className="dropdownButton">Kategorie czy cos<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-caret-down-fill" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg></button>
                                        {isOpen && isDropdownOpen && ( 
                                            <div className="dropdownMenu">
                                                {Kategorie.map((item) => (
                                                    <p>{item.nazwa}</p> 
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </nav>
                        <button className="hamburger" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" className="bi bi-x-lg" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/></svg>
                    </button>
                    </>
                    
                )}
            
            
            {(isDesktop) && (
                <>
                    
                    <Gorny></Gorny>
                    
                    
                </>
            )}
            <div className="linia"></div>
            <Srodkowy></Srodkowy>
            {(isDesktop) && (
                <>
                    
                    
                    <div className='wszystko'>
                        <div className='k_duzy'>
                            {Kategorie.map((item) => (
                                <p>{item.nazwa}</p> 
                            ))}
                        </div>
                    </div>
                    
                </>
            )}
            
            
        </>
        
    );
};
export default Navbar
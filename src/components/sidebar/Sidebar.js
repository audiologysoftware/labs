

import React, { useState, useEffect } from 'react';
import SidebarItem from '../sidebar/SidebarItem';
import items from '../../data/sidebar.json';
import Logo from '../../assets/logo.jpg';
import '../layout/layout.css';


export default function Sidebar() {
    const [displaySidebar, setDisplaySidebar] = useState(true);
    const [displayMenuIcon, setDisplayMenuIcon] = useState(false)
    const [showSidebarItems, setShowSidebarItems] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);


   
    const toggleSidebar = () => {
        setDisplaySidebar(!displaySidebar);
        // Only toggle sidebar items if it's in mobile view
        if (isMobileView) {
            setShowSidebarItems(!showSidebarItems);
        }
    };
    

    useEffect(() => {
        const handleResize = () => {
            // Update displaySidebar based on screen size
            if (window.innerWidth <= 768) {
                setDisplaySidebar(false); // Set displaySidebar to false for mobile screens
                setDisplayMenuIcon(true);
            } else {
                setDisplaySidebar(true); // Set displaySidebar to true for desktop screens
                setDisplayMenuIcon(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {/* Hamburger icon for mobile view */}
            {displayMenuIcon && <div className="hamburger-icon" onClick={toggleSidebar}>
                <img src="/tumburger.png" alt="Menu" />
            </div>
            }

            {/* Sidebar */}
            {displaySidebar && (
                <div className="sidebar">
                    <div className="logo">
                        <img src={Logo} alt="Eltol_Logo" className="logo_image" />
                    </div>
                    <div>
                        {items.map((item, index) => (
                            <SidebarItem key={index} item={item} />
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}




import { useState, useContext } from "react";
import PositionContext from "../../store/RouteContextProvider";
import {useNavigate} from 'react-router-dom';
import './sidebar.css';

export default function SidebarItem({ item }) {
    const [open, setOpen] = useState(false);
    const { updateCurrentPage, current } = useContext(PositionContext);
    const navigate = useNavigate();

    const setPageNo = (position) => {
        updateCurrentPage(position);
    };

    const handleClick = (event) => {
        event.preventDefault(); // Prevent default behavior of anchor tag
        setPageNo(item.position);
        navigate(item.path)
    
    };

    return (
        <div className={open ? "sidebar-item open" : "sidebar-item"}>
            <div className="sidebar-title">
                <span>
                    <a href={item.path} className="sidebar-item plain" style={{ color: "white" }} onClick={handleClick}>

                        {/* {item.icon && <i className={item.icon}></i>} */}
                        {item.title} 
                    </a>
                </span>
                <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
            </div>
            <div className="sidebar-content">
                {item.childrens && item.childrens.map((child, index) => <SidebarItem key={index} item={child} />)}
            </div>
        </div>
    );
}


import SidebarItem from "../sidebar/SidebarItem"
import items from "../../data/sidebar.json"
import Logo from '../../assets/logo.jpg'
import './sidebar.css'


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={Logo} alt="Eltol_Logo" className="logo_image" />
            </div>
            <div>
                {items.map((item, index) => <SidebarItem key={index} item={item} />)}
            </div>
        </div>
    )
}

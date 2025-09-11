import React from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const navigate= useNavigate()
    const handleHome=()=> {
        navigate("/")
    }
    const onClick = ()=> {
        navigate("/")
    }
    return (
        <nav className="navbar">
            <div className="nav-logo">BrdStore</div>
            
            <ul className="nav-links">
                <li onClick={handleHome}>Home</li>
                <li onClick={onClick}>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="cart_section">
                < FaShoppingCart />
                <div className="cartCount">1</div>
            </div>
            <div className="menu">
                <IoIosMenu />
            </div>
        </nav>
    );
};

export default Navbar;
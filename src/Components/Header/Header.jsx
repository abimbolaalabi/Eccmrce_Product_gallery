import React from "react";
import "./Header.css";
import { FaShoppingCart } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../utiils/AppContext";
import { Link } from "react-router-dom";
import Cart from "../../pages/Cart";


const Navbar = () => {
    const navigate = useNavigate()
    const handleHome = () => {
        navigate("/")
    }
    const onClick = () => {
        navigate("/")
    }
    const { cart } = useContext(AppContext);
    const count = cart.reduce((total, item)=> total + item.quantity, 0)
    return (
        <nav className="navbar">
            <div className="nav-logo">BrdStore</div>

            <ul className="nav-links">
                <li onClick={handleHome}>Home</li>
                <li onClick={onClick}>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <Link to='/cart'> 
            <div className="cart_section">
               < FaShoppingCart  />

                <div className="cartCount">{count}</div>
            </div>
            </Link>
    
                {/* <div className="cartDrop">

                </div> */}

            <div className="menu">
                <IoIosMenu />
            </div>
        </nav>
    );
};

export default Navbar;
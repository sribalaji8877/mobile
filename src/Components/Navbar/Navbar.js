import React, { Component } from 'react';
import logo from '../../Assets/logo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';


class Navbar extends Component {
    render() {
        return (
            <div className="navbar_overall">
                <div className="container">
                <div className="logo">
                    <Link to="/"> <img src={logo} alt="logo"></img></Link>  
                </div>
                <div className="product">
                    <Link to="/"> <h2>Products</h2></Link> 
                </div>
                <div className="cart_list">
                <Link to="/cart"> <button>MyCart</button></Link>
                </div>
                </div>

            </div>
        )
    }
}
export default Navbar
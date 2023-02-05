import React from "react";
import {NavLink} from "react-router-dom"
import { useSelector } from "react-redux/es/exports";
function Navbar() {
  const state=useSelector((state)=>state.handleCart)
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-light bg-white py-3 shadow-sm">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
        RUSSA
          </NavLink>
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link  " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          <div className="buttons">
          <NavLink to="/login" className="btn btn-outline-dark"><i className="fa fa-sign-in me-1"></i>Login</NavLink>

          </div>
          <div className="buttons">
          <NavLink to="/register" className="btn btn-outline-dark ms-3"><i className="fa fa-user-plus me-1"></i>Register</NavLink>

          </div>
          <div className="buttons">
          <NavLink to="/cart" className="btn btn-outline-dark ms-3"><i className="fa fa-shopping-cart me-1"></i>Cart({state.length})</NavLink>

          </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

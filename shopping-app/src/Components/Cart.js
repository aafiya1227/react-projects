import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux/es/exports";

import { addCart, delCart } from "../redux/action";
import {NavLink} from "react-router-dom"

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5 ">
        <div className="container py-4 ">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
       </div>
    );
  };

  const cartItems = (product) => {
    return (
      <>
        <div className="bg-light rounded-4 px-5 my-4 py-4">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-md-4 ">
                <img
                  src={product.image}
                  alt={product.title}
                  height="200px"
                  width="200px"
                />
              </div>
              <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className="lead fw-bolder">
                  {product.qty} X ${product.price} = ${" "}
                  {product.qty * product.price}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleDel(product)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleAdd(product)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <NavLink
              to="/checkout"
              className="btn btn-outline-dark mb-5 w-25 mx-auto py-3"
            >
              Proceed to Checkout
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return <div>
  
  {state.length === 0 && emptyCart()}
  {state.length !== 0 && state.map(cartItems)}
  {state.length !== 0 && buttons()}
  </div>;
};

export default Cart;

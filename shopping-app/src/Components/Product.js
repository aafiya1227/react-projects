import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { NavLink, useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, [id]);
  const Loading = () => {
    return <>Loading....</>;
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 ">
          <img
            src={product.image}
            alt={product.title}
            height="500px"
            width="400px"
          />
        </div>
        <div className="col-md-6 ">
          <h3 className="text-uppercase text-black-50">{product.category}</h3>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-7 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-3 fw-bold "
            onClick={() => {
              addProduct(product);
            }}
          >
            ADD TO CART
          </button>
          <NavLink to="/cart" className="btn btn-dark ms-4 px-4 py-3 fw-bold">
            GO TO CART
          </NavLink>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row justify-content-center display-5 py-4">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default Product;

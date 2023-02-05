import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("All");
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        const resData = await response.json();
        setData(resData);
        setFilter(resData);
        setLoading(false);
        
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="display-3">Loading....</div>
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="buttons d-flex flex-column buton ">
          <button
            type="button"
            className={`btn ${
              active === "All" ? "activeButton" : ""
            } btn-outline-dark me-2 `}
            onClick={() => {
              setFilter(data);
              setActive("All");
            }}
          >
            All
          </button>
          <button
            type="button"
            className={`btn  ${
              active === "Men's Clothing" ? "activeButton" : ""
            } btn-outline-dark me-2`}
            onClick={() => {
              filterProduct("men's clothing");
              setActive("Men's Clothing");
            }}
          >
            Men's Clothing
          </button>
          <button
            className={`btn ${
              active === "Women's Clothing" ? "activeButton" : ""
            } btn-outline-dark me-2`}
            onClick={() => {
              filterProduct("women's clothing");
              setActive("Women's Clothing");
            }}
          >
            Women's Clothing
          </button>
          <button
            className={`btn ${
              active === "Jewellery" ? "activeButton" : ""
            } btn-outline-dark me-2`}
            onClick={() => {
              filterProduct("jewelery");
              setActive("Jewellery");
            }}
          >
            Jewellery
          </button>
          <button
            className={`btn ${
              active === "Electronics" ? "activeButton" : ""
            }  btn-outline-dark`}
            onClick={() => {
              filterProduct("electronics");
              setActive("Electronics");
            }}
          >
            Electronics
          </button>
        </div>
        <div className="box">
          {filter.map((product) => {
            return (
              <>
                <div className="col-md-3 mb-2 p-4 ">
                  <div className="card h-100 text-center p-3" key={product.id}>
                    <img
                      src={product.image}
                      className="card-img-top "
                      height="150px"
                      
                      alt={product.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title mb-0">
                        {product.title.substring(0, 15)}..
                      </h5>
                      <p className="card-text lead fw-bold">
                       {product.price>20?"$20+":"$"+ product.price}
                      </p>
                      <NavLink
                        to={`/products/${product.id}`}
                        className="btn btn-outline-dark"
                      >
                        BUY NOW
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="conatiner my-5  ">
        <div className="row me-1">
          <div className="col-12 mb-3">
            <h1 className="display-6 text-center fw-bold"> Latest Products </h1>
            <hr />
          </div>
        </div>
        <div className="show">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Products;

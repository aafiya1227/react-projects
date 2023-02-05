/* eslint-disable jsx-a11y/alt-text */
import react, { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import "./Header.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className="main-image">
        <img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg" />
      </div>
    </Fragment>
  );
};

export default Header;

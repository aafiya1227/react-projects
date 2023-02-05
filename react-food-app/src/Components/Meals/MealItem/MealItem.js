import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import "./MealItem.css";
import CartContext from "../../../Store/Cart-context";
const MealItems = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    })

  };
  return (
    <li>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
      <div className="meal">
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price">{price}</div>
      </div>
    </li>
  );
};

export default MealItems;

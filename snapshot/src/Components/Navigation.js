import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link className="link" to="/items/animal">
        Animal
      </Link>
      <Link className="link" to="/items/plants">
        Plants
      </Link>
      <Link className="link" to="/items/space">
        Space
      </Link>
      <Link className="link" to="/items/random">
        Random
      </Link>
    </div>
  );
};

export default Navigation;

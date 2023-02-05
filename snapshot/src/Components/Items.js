import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Unsplash, { toJson } from "unsplash-js";
import  "./Snapshot.css"
const unsplash = new Unsplash({
  accessKey: "ebmWm589E2wA8pplPdPth0wYWD269u29ucYd98GTunM",
});

const Items = () => {
  const { item } = useParams();
  const [pics, setPics] = useState([]);

  useEffect(() => {
    unsplash.search
      .photos(item)
      .then(toJson)
      .then((json) => {
        console.log(json.results);
        setPics(json.results);
      });
  }, [item]);
  return (
    <>
   
      {pics.map((pic) => (
        <div className="card" key={pic.id}>
          <img
            className="card--image"
            alt={pic.alt_description}
            src={pic.urls.full}
            width="50%"
            height="50%"
          ></img>
        </div>
      ))}
    </>
  );
};
export default Items;

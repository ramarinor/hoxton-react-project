import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
function PaintDetails() {
  const params = useParams();
  const [color, setColor] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:3000/colors/${params.id}`)
      .then((resp) => resp.json())
      .then((color) => setColor(color));
  }, []);
  if (color === null) return <main className="main">Loading</main>;
  return (
    <main className="main">
      <div className="description">
        <div className="name-and-number">
          <h2 className="name">{color.id}</h2>
          <span className="number">N°{color.number}</span>
        </div>
        <div className="info">
          <p className="info-paragraph">
            Palette paint is easy to apply. The density of its pigments makes
            the paint ultra-covering. For better results and smoothness, it is
            recommended to use the Palette paint roller, which has short
            bristles. In most cases and depending on the substrate, a single
            layer is enough.
          </p>
          <p className="info-paragraph">
            Our premium interior Standard Finish water-based paint is a highly
            desirable low-sheen paint, durable and semi-matte. Standard Finish
            is made out of acrylic resin for maximum durability. It is optimized
            for self-priming, easy application, ultra-low smell, high
            pigmentation, quick drying and superior coverage.
          </p>
        </div>
        <button className="cta">Add to cart</button>
      </div>
      <div className="image">
        <img src={`../../assets/paints/${color.id}.png`} alt={color.id} />
      </div>
    </main>
  );
}

export default PaintDetails;

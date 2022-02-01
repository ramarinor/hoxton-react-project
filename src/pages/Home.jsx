import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Background from "../components/Background/Background";
import PaintsList from "../components/PaintsList/PaintsList";
import Reasons from "../components/Reasons/Reasons";
function Home() {
  const [colors, setColors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/colors?_sort=date&_order=desc&_limit=10")
      .then((resp) => resp.json())
      .then((colors) => setColors(colors));
  }, []);
  return (
    <main>
      <Background
        className="background home"
        style={{ backgroundImage: "url(../../assets/backgrounds/home.jpeg)" }}
      >
        <h2 className="background-headline">
          Eco-friendly Paints For A Healthy Home
        </h2>
        <Link className="background-link cta" to="/paints">
          SHOP OUR COLORS
        </Link>
      </Background>
      <Reasons />
      <section className="paints">
        <h2 className="paints-title">New drops</h2>
        <main className="paints-content">
          <PaintsList colors={colors} />
          <div className="paints-link">
            <Link className="cta" to="/paints">
              SHOP OUR COLORS
            </Link>
          </div>
        </main>
      </section>
    </main>
  );
}

export default Home;

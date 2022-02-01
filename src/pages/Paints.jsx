import { useEffect, useState } from "react";
import Background from "../components/Background/Background";
import PaintsList from "../components/PaintsList/PaintsList";
import Reasons from "../components/Reasons/Reasons";

function Paints() {
  const [colors, setColors] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/colors")
      .then((resp) => resp.json())
      .then((colors) => setColors(colors));
  }, []);
  return (
    <main>
      <Background
        className="background"
        style={{ backgroundImage: "url(../../assets/backgrounds/paints.jpeg)" }}
      >
        <h2 className="background-headline">Shop our paints</h2>
        <Reasons style={{ color: "white" }} />
      </Background>
      <section className="paints">
        <main className="paints-content">
          <PaintsList colors={colors} />
        </main>
      </section>
    </main>
  );
}

export default Paints;

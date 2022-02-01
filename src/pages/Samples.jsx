import { useEffect, useState } from "react";
import Background from "../components/Background/Background";
import Reasons from "../components/Reasons/Reasons";
import SamplesList from "../components/SamplesList/SamplesList";

function Samples() {
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
        style={{
          backgroundImage: "url(../../assets/backgrounds/samples.jpeg)"
        }}
      >
        <h2 className="background-headline">Shop our samples</h2>
        <Reasons style={{ color: "white" }} />
      </Background>
      <section className="samples">
        <main className="samples-content">
          <SamplesList colors={colors} />
        </main>
      </section>
    </main>
  );
}

export default Samples;

import { color } from "@mui/system";
import { useEffect, useState } from "react";
import Background from "../components/Background/Background";
import ColorSelect from "../components/ColorSelect/ColorSelect";
import PaintsList from "../components/PaintsList/PaintsList";
import Reasons from "../components/Reasons/Reasons";

function Paints() {
  const [colors, setColors] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  function getColorsToDisplay() {
    let colorsToDisplay = colors;
    if (selectedColors.length !== 0) {
      colorsToDisplay = colorsToDisplay.filter((color) =>
        selectedColors.includes(color.color)
      );
    }
    return colorsToDisplay;
  }
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
        <div className="filters">
          <ColorSelect
            selectedColors={selectedColors}
            setSelectedColors={setSelectedColors}
          />
        </div>
        <main className="paints-content">
          <PaintsList colors={getColorsToDisplay()} />
        </main>
      </section>
    </main>
  );
}

export default Paints;

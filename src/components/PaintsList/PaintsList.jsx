import PaintItem from "./PaintItem/PaintItem";
import "./PaintsList.css";

function PaintsList({ colors }) {
  return (
    <ul className="paints-list">
      {colors.map((color) => (
        <PaintItem color={color} />
      ))}
    </ul>
  );
}

export default PaintsList;

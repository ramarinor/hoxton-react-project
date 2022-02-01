import SampleItem from "./SampleItem/SampleItem";
import "./SamplesList.css";

function SamplesList({ colors }) {
  return (
    <ul className="samples-list">
      {colors.map((color) => (
        <SampleItem color={color} />
      ))}
    </ul>
  );
}

export default SamplesList;

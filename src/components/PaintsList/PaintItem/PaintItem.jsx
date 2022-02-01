import "./PaintItem.css";
function PaintItem({ color }) {
  return (
    <li className="paint">
      <a href={`paints/${color.id}`} className="paint-link">
        <div
          className="paint-circle"
          style={{ backgroundColor: color.hexCode }}
        >
          <img
            src={`../../../../assets/paints/${color.id}.png`}
            alt={color.id}
          />
        </div>
        <div className="paint-info">{`${color.id.replace("-", " ")} - N°${
          color.number
        }`}</div>
        <div className="paint-price">€39/1L</div>
      </a>
    </li>
  );
}

export default PaintItem;

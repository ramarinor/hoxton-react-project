import Background from "../components/Background/Background";
import Reasons from "../components/Reasons/Reasons";

function Paints() {
  return (
    <main>
      <Background
        className="background"
        style={{ backgroundImage: "url(../../assets/backgrounds/paints.jpeg)" }}
      >
        <h2 className="background-headline">Shop our paints</h2>
        <Reasons style={{ color: "white" }} />
      </Background>
    </main>
  );
}

export default Paints;

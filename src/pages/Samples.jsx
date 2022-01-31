import Background from "../components/Background/Background";
import Reasons from "../components/Reasons/Reasons";

function Samples() {
  return (
    <Background
      className="background"
      style={{ backgroundImage: "url(../../assets/backgrounds/samples.jpeg)" }}
    >
      <h2 className="background-headline">Shop our samples</h2>
      <Reasons style={{ color: "white" }} />
    </Background>
  );
}

export default Samples;

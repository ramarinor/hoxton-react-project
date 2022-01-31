import Background from "../components/Background/Background";
import Reasons from "../components/Reasons/Reasons";
function Home() {
  return (
    <main>
      <Background
        className="background home"
        style={{ backgroundImage: "url(../../assets/backgrounds/home.jpeg)" }}
      >
        <h2 className="background-headline">
          Eco-friendly Paints For A Healthy Home
        </h2>
        <a className="background-link cta" href="/paints/paints.html">
          SHOP OUR COLORS
        </a>
      </Background>
      <Reasons />
    </main>
  );
}

export default Home;

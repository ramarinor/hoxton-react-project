import { Link } from "react-router-dom";
import "./Header.css";
function Header() {
  return (
    <header className="header">
      <nav className="nav-bar">
        <ul className="nav-bar-list">
          <li className="nav-bar-item">
            <Link to="/paints" className="nav-bar-link">
              PAINTS
            </Link>
          </li>
          <li className="nav-bar-item">
            <Link to="/samples" className="nav-bar-link">
              SAMPLES
            </Link>
          </li>
        </ul>
      </nav>
      <Link to="/" className="logo-link">
        <h1 className="logo">PALETTE</h1>
      </Link>

      <nav className="nav-bar">
        <ul className="nav-bar-list">
          <li className="nav-bar-item">
            <Link to="/calculator" className="nav-bar-link">
              CALCULATOR
            </Link>
          </li>
          <li className="nav-bar-item">
            <Link to="/Login" className="nav-bar-link">
              LOG IN
            </Link>
          </li>
          <li className="nav-bar-item">
            <Link to="/cart" className="nav-bar-link">
              CART (0)
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

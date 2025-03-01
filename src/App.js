import Header from "./components/Header";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Header />
      <div className="container py-4">
        <img
          src="https://placehold.co/600x400?text=Hello+World"
          className="img-fluid"
        />
        <section className="mt-4">
          <h2>Our Players</h2>
          <p>
            Meet our talented team of players who work hard to achieve success
            on the field.
          </p>
          <Link to="/players" className="btn btn-primary">
            View Players
          </Link>
        </section>

        <section className="mt-4">
          <h2>Team Performance</h2>
          <p>
            Explore our team's performance statistics to gain insights into our{" "}
            success on the field.
          </p>
          <Link to="/report" className="btn btn-primary">
            View Performance
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  );
}

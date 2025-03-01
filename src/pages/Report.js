import Header from "../components/Header";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const Report = () => {
  return (
    <>
      <Header />
      <div className="container py-4">
        <h1>Team Performance Report</h1>
        <hr />
        <div className="row">
          <div className="col">
            <h2>Top Scorer</h2>
            <p>Name: Lionel Messi</p>
            <p>Goal Scored: 25</p>
          </div>

          <div className="col">
            <h2>Best Assister</h2>
            <p>Name: Neymar Jr</p>
            <p>Assists: 15</p>
          </div>

          <div className="col">
            <h2>Most Valueble Player(MVP)</h2>
            <p>Name: Cristiano Ronaldo</p>
            <p>Overall Rating: 9.5</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Report;

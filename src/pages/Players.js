import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

export const playersData = [
  { id: 1, name: "Lionel Messi", position: "Forward", team: "Barcelona" },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    position: "Forward",
    team: "Manchester United",
  },
  {
    id: 3,
    name: "Neymar Jr",
    position: "Forward",
    team: "Paris Saint-Germain",
  },
  {
    id: 4,
    name: "Kylian Mbappé",
    position: "Forward",
    team: "Paris Saint-Germain",
  },
  {
    id: 5,
    name: "Robert Lewandowski",
    position: "Forward",
    team: "Bayern Munich",
  },
];

const Players = () => {
  const [playersFilter, setPlayersFilter] = useState("All");
  const filterPlayers =
    playersFilter === "All"
      ? playersData
      : playersData.filter((player) => player.team === playersFilter);
  return (
    <>
      <Header />
      <div className="container py-4">
        <h1>List of Players</h1>
        <div className="mb-4">
          <label htmlFor="teamFilter">Filter by Team: </label>
          <select
            id="teamFilter"
            onChange={(event) => setPlayersFilter(event.target.value)}
            className="form-control"
          >
            <option value="All">All Teams</option>
            <option value="Barcelona">Barcelona</option>
            <option value="Manchester United">Manchester United</option>
            <option value="Paris Saint-Germain">Paris Saint-Germain</option>
            <option value="Bayern Munich">Bayern Munich</option>
          </select>
        </div>
        <div>
          <ul className="list-group">
            {filterPlayers.map((data) => (
              <>
                <li className="list-group-item">
                  <h3>{data.name}</h3>
                  <p>Position: {data.position}</p>
                  <p>Team: {data.team}</p>
                  <Link to={`/players/${data.id}`} className="btn btn-primary">
                    View Details
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Players;

import Header from "../components/Header";
import Footer from "../components/Footer";
import { playersData } from "./Players";
import { useParams } from "react-router-dom";

const PlayerDetails = () => {
  const playerId = useParams();
  console.log(playerId);
  const player = playersData.find(
    (ply) => ply.id === parseInt(playerId.playerId)
  );

  return (
    <>
      <Header />
      <div className="container py-4">
        {player ? (
          <div>
            <h2>{player.name}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Name: </strong>
                {player.name}
              </li>
              <li className="list-group-item">
                <strong>Position: </strong>
                {player.position}
              </li>
              <li className="list-group-item">
                <strong>Team: </strong>
                {player.team}
              </li>
            </ul>
          </div>
        ) : (
          <p>Player not found.</p>
        )}
      </div>
      <Footer />
    </>
  );
};
export default PlayerDetails;

import { useState } from "react";

const initialPlayers = [
  { name: "David", points: 0 },
  { name: "Nora", points: 0 },
];

export default function App() {
  return (
    <div>
      <PlayerList />
    </div>
  );
}

function PlayerList() {
  const [playerList, setPlayerList] = useState(initialPlayers);
  const [name, setName] = useState("");
  const [points] = useState(0); // points input is static here

  function addPlayer(player) {
    setPlayerList((list) => [...list, player]);
  }

  function handleAddPlayer(e) {
    e.preventDefault();
    if (!name.trim()) return;

    const newPlayer = { name, points };
    addPlayer(newPlayer);
    setName("");
  }

  return (
    <>
      <ul>
        {playerList.map((player) => (
          <Player player={player} key={player.name} />
        ))}
      </ul>
      <Form onHandleAddPlayer={handleAddPlayer} name={name} setName={setName} />
    </>
  );
}

function Form({ onHandleAddPlayer, name, setName }) {
  return (
    <form onSubmit={onHandleAddPlayer}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Skriv inn spillerens navn"
      />
      <button type="submit">Add player</button>
    </form>
  );
}

function Player({ player }) {
  return (
    <li>
      <h3>{player.name}</h3>
      <h3>{player.points}</h3>
    </li>
  );
}

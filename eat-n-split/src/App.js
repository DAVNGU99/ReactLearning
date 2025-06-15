import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((s) => !s);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        {showAddFriend && <FormAddFriend />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendsList() {
  const friends = initialFriends;

  return (
    <ul>
      {friends.map((f) => (
        <Friend f={f} key={f.id} />
      ))}
    </ul>
  );
}

function Friend({ f }) {
  return (
    <li>
      <img src={f.image} alt={f.name} />
      <h3>{f.name}</h3>

      {f.balance < 0 && (
        <p className="red">
          You owe {f.name} {Math.abs(f.balance)}£
        </p>
      )}

      {f.balance > 0 && (
        <p className="green">
          {f.name} owes you {f.balance}£
        </p>
      )}

      {f.balance === 0 && <p className="">You and {f.name} are even</p>}

      <Button>Select</Button>
    </li>
  );
}

function FormAddFriend() {
  return (
    <form className="form-add-friend">
      <label>🤒 Friend name</label>
      <input type="text"></input>

      <label>😘 Image URL</label>
      <input type="text"></input>

      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>💰 Bill value</label>
      <input type="text"></input>

      <label>💰 Your expenses </label>
      <input type="text"></input>

      <label> X's expense</label>
      <input type="text" disabled></input>

      <label>Who is paying</label>
      <select>
        <option value="user">You</option>
        <option value="x">X</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

import { useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import data from "./data";
function App() {
  const [input, setInput] = useState("");

  const filteredData = data.filter((user) => {
    const name = `${user.title}. ${user.firstName} ${user.lastName}`;
    return name.toLowerCase().includes(input.toLowerCase());
  });

  const profiles = filteredData.map((user) => {
    return <ProfileCard key={user.id} {...user} />;
  });

  return (
    <>
      <input
        type="text"
        value={input}
        placeholder="Search by name..."
        onChange={(e) => setInput(e.target.value)}
      />
      <section className="profiles-list">{profiles}</section>;
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import axios from "axios";


function Digimons() {
  const [digimons, setDigimons] = useState([]);
  const [loading, setLoading] = useState(true);      // loading state
  const [error, setError] = useState(null);          // error state

  // for the props drilling example
  const user = { name: "Razan", role: "Instructor" };

  useEffect(() => {
    axios
      .get("https://digimon-api.vercel.app/api/digimon")
      .then((response) => {
        setDigimons(response.data.slice(0, 10)); // first 10 digimon
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch Digimon data.");
        setLoading(false);
      });
  }, []);

  // 🧠 Conditional rendering logic
  if (loading) return <p>🔄 Loading Digimon...</p>;
  if (error) return <p style={{ color: "red" }}>❌ {error}</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🐉 Digimon Characters</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {digimons.map((digimon, index) => (
          <li key={index}>
            <strong>{digimon.name}</strong> — {digimon.level}
            <br />
            <img src={digimon.img} alt={digimon.name} width="100" />
            <hr />
          </li>
        ))}
      </ul>

     
    </div>

  );
}

export default Digimons;

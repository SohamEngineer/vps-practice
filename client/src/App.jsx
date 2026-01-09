import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
  fetch("http://localhost:5000/api/health")
    .then((res) => res.json())
    .then((data) => setMessage(data.status))
    .catch(() => setMessage("Backend not connected"));
}, []);


  return (
    <>
      <h1>This is the Application for testing VPS</h1>
      <p>{message}</p>
    </>
  );
}

export default App;

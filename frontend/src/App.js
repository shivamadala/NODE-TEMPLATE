import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/`)
      .then(response => setMessage(response.data))
      .catch(error => setMessage("Error connecting to backend"));
  }, []);

  return (
    <div>
      <h1>Frontend is Running!</h1>
      <p>Backend Response: {message}</p>
    </div>
  );
}

export default App;


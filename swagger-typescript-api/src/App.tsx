import React, {useEffect, useState} from 'react';
import './App.css';
import {client} from "./api/client";

function App() {
  const [version, setVersion] = useState("");

  useEffect(() => {
    client.version.getApiInfo()
      .then(res => setVersion(res.data.version))
      .catch(() => setVersion("Get version failed"));
  }, []);

  return (
    <div className="App">
      <h1>OpenAPI runtime validation</h1>
      <h2>BE version: {version}</h2>
    </div>
  );
}

export default App;

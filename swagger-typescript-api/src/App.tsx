import React, {useEffect, useState} from 'react';
import './App.css';
import {client} from "./api/client";
import {AppVersion} from "./generated/openapi";
import {Version} from "./Version";

function App() {
  const [appVersion, setAppVersion] = useState<AppVersion>();
  const [error, setError] = useState("");

  useEffect(() => {
    client.version.getApiInfo()
      .then(res => setAppVersion(res.data))
      .catch(() => setError("Get version failed"));
  }, []);

  return (
    <div className="App">
      <h1>OpenAPI runtime validation</h1>
      {appVersion!! && <h2><Version appVersion={appVersion} /></h2>}
      {error!! && <h2>{error}</h2>}
    </div>
  );
}

export default App;

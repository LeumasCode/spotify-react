import React, { useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import Player from "./Player";

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
};

export default App;

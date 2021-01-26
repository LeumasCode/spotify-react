import React, { useEffect, useState } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import Player from "./Player";
import SpotifyWebApi from "spotify-web-api-js";


const spotify = new SpotifyWebApi()

const App = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token)

      spotify.getMe().then((user)=> console.log(user))
    }

  }, []);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
};

export default App;

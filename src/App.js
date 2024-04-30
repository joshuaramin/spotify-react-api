import React, { useEffect, useState } from "react";
import "./App.css";
import NavigationBar from "./components/navigation/navigation";
import Main from "./components/main";

function App() {
  const onHandleAuthorization = async () => {
    const handleData = await fetch(`https://accounts.spotify.com/api/token`, {
      method: "POST",
      headers: {
        Authorization:
          "Basic MWQ1YjIzOWM2ZjI1NDExNGI0MzE4NmMxYTY1MTAzYmY6MGY0MDdiZTEwOGU2NDRjZjkxZjJmMjY3MjdjMjFiODM=",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }),
    });

    const { access_token } = await handleData.json();

    localStorage.setItem("spotify_token", access_token);
  };

  const [query, setQuery] = useState("");

  const [data, setData] = useState("");

  const getMyToken = localStorage.getItem("spotify_token");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${query}&type=album%2Ctrack`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${getMyToken}`,
          },
        }
      );

      const res = await response.json();

      setData(res);
    };

    fetchData();
  }, [getMyToken, query]);

  const onHandleSearch = (e) => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <div className="authentication">
        <button onClick={onHandleAuthorization}>Login</button>
      </div>
      <NavigationBar value={query} onChange={onHandleSearch} />
      <Main data={data} />
    </div>
  );
}

export default App;

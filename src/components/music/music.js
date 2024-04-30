import React, { useState } from "react";
import Body from "./body";

import "../../App.css";

export default function Music({ musics }) {
  return (
    <div className="MusicContainer">
      <h2>Music List</h2>
      <div className="musicgrid">
        {musics?.items.map(({ album, artist, id, url, name, type }) => (
          <div key={id} className="musicCard">
            <img
              src={album.images[1].url}
              alt={name}
              height={280}
              width={280}
            />
            <h2>{name}</h2>
            {JSON.stringify(artist)}
          </div>
        ))}
      </div>
    </div>
  );
}

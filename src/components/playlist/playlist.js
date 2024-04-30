import React, { useEffect } from "react";
import "../../App.css";
import Body from "./body";
import { format } from "date-fns";

export default function Playlist({ playlist }) {
  return (
    <div className="playlist">
      <h2>Playlist</h2>
      <div className="playlistgrid">
        {playlist?.items.map(({ images, name, id, release_date }) => (
          <div key={id} className="playlistCard">
            <img src={images[1].url} alt="" height={280} width={280} />
            <div className="info">
              <span>{name}</span>
              <span>{format(new Date(release_date), "MMMM yyyy")}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

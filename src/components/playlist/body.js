import React from "react";
import "../../App.css";

export default function Body({ playlist }) {
   return (
      <ul>
         {playlist.map((music) => (
            <li key={music.id}>
               {music.title} by {music.artist}
            </li>
         ))}
      </ul>
   );
}

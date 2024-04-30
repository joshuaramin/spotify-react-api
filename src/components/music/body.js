import React from "react";
import "../../App.css";
export default function body({ musics }) {
   return (
      <ul>
         {musics.map((music) => (
            <li key={music.id}>
               {music.title} by {music.artist} ({music.genre})
               <button>♥️</button>
            </li>
         ))}
      </ul>
   );
}

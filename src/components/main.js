import React, { useState, useEffect } from "react";
import Music from "./music/music";
import Playlist from "./playlist/playlist";

export default function Main(data) {
  console.log(data);
  return (
    <div className="container">
      <Music musics={data.data.tracks} />
      <Playlist playlist={data.data.albums} />
    </div>
  );
}

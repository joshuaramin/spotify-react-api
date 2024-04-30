import React, { useEffect, useState } from "react";

export default function NavigationBar({ query, onChange }) {
  return (
    <nav className="navigation">
      <input
        className="search"
        type="text"
        placeholder="Search song, artist..."
        value={query}
        onChange={onChange}
      />
    </nav>
  );
}

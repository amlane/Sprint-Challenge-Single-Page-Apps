import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterList({ data }) {
  return (
    <section className="character-list">
      <h2>Character List!</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map(char => {
          return <CharacterCard char={char} key={char.id} />;
        })}
      </div>
    </section>
  );
}

import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

export default function CharacterList({ data, page, setPage, fetchData }) {
  const increasePage = e => {
    e.preventDefault();
    setPage(++page);
  };

  const decreasePage = e => {
    e.preventDefault();
    setPage(--page);
  };
  return (
    <section className="character-list">
      <div
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        <button onClick={decreasePage} disabled={page === 1}>
          -
        </button>
        <span style={{ margin: "0 10px" }}>{page}</span>
        <button onClick={increasePage} disabled={page === 25}>
          +
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map(char => {
          return <CharacterCard char={char} key={char.id} />;
        })}
      </div>
    </section>
  );
}

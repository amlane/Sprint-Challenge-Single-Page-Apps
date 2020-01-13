import React from "react";

export default function CharacterCard({ char }) {
  console.log(char);
  return (
    <div
      style={{
        margin: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <img
        src={char.image}
        alt={char.name}
        style={{ width: "150px", height: "auto" }}
      />
      <span style={{ maxWidth: "150px", textAlign: "center" }}>
        {char.name}
      </span>
    </div>
  );
}

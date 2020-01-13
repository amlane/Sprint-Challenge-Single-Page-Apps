import React, { useState } from "react";

export default function SearchForm({ setInputValue, fetchData }) {
  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchData();
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input onChange={handleChange} />
      <button>Search</button>
    </form>
  );
}

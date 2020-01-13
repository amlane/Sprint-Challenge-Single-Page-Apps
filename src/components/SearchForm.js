import React, { useState } from "react";

export default function SearchForm({ setInputValue, fetchData, inputValue }) {
  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetchData();
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input onChange={handleChange} value={inputValue} />
      <button>Search</button>
    </form>
  );
}

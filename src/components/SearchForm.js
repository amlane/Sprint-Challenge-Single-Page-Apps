import React, { useState } from "react";

export default function SearchForm({
  setInputValue,
  fetchData,
  inputValue,
  setPage
}) {
  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setPage(1);
    fetchData();
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input onChange={handleChange} value={inputValue} />
      <button>Search</button>
    </form>
  );
}

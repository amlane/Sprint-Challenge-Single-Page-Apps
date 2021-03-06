import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm.js";

export default function App() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(25);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    fetchData();
  }, [page]);

  const fetchData = () => {
    console.log("inputValue", inputValue);
    axios
      .get(
        `https://rickandmortyapi.com/api/character/?name=${inputValue}&page=${page}`
      )
      .then(res => {
        console.log("fire", res);
        setPageCount(res.data.info.pages);
        setData(res.data.results);
      })
      .catch(err => console.log(err));
  };

  return (
    <main>
      <nav>
        <Link to="/">Welcome Page</Link>
        <Link to="/character-list">See Characters</Link>
        <SearchForm
          setInputValue={setInputValue}
          inputValue={inputValue}
          fetchData={fetchData}
          setPage={setPage}
        />
      </nav>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route
        path="/character-list"
        render={props => (
          <CharacterList
            {...props}
            data={data}
            page={page}
            setPage={setPage}
            pageCount={pageCount}
          />
        )}
      />
    </main>
  );
}

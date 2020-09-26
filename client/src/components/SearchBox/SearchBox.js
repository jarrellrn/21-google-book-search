import React, { useState, useEffect } from "react";
import googlebooks from "google-books-search";
import "./SearchBox.css";
import SearchResults from "../SearchResults/SearchResults";

function SearchBox() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  useEffect(() => {
    runSearch();
  }, [search]);

  const runSearch = () => {
    googlebooks.search(search, function (error, results) {
      if (!error) {
        setBooks(results);
      } else {
        console.log(error);
      }
    });
  };

  const results = books.map((books) => (
    <SearchResults key={books.id} books={books} />
  ));

  return (
    <div>
      <form>
        <div id="searchLabelContainer">
          <label id="searchText">Search for a book</label>
          <input
            id="inputContainer"
            type="text"
            aria-describedby="emailHelp"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </form>
      {results}
    </div>
  );
}

export default SearchBox;

import React from "react";
import axios from "axios";
import "./SearchResults.css";

function SearchResults(props) {
  function saveBook() {
    axios({
      method: "post",
      url: "/saved/add",
      data: {
        title: props.books.title,
        authors: props.books.authors[0],
        description: props.books.description,
        link: props.books.link,
        thumbnail: props.books.thumbnail,
      },
    });
  }

  const alert = () => {
    alert("Book saved");
  };

  return (
    <div>
      <ul>
        <li>
          <h2 className="title">{props.books.title}</h2>
          <h4 className="author">{props.books.authors}</h4>
          <div className="container">
            <div className="row">
              <div id="thumbnailDiv">
                <img src={props.books.thumbnail} alt="" />
              </div>
              <div>
                <p>{props.books.description}</p>
              </div>
            </div>
          </div>
          <div>
            <button type="button" style={{ backgroundColor: "white" }}>
              <a
                href={props.books.link}
                target="_blank"
                style={{ color: "black" }}
              >
                View
              </a>
            </button>
            <button
              onClick={() => {
                saveBook();
                alert();
              }}
              style={{ backgroundColor: "white" }}
            >
              Save
            </button>
          </div>
          <hr />
        </li>
      </ul>
    </div>
  );
}

export default SearchResults;

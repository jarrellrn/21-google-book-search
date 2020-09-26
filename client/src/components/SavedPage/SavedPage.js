import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SavedPage.css";
import Swal from "sweetalert2";

function SavedPage() {
  const [SavedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    axios
      .get("/saved")
      .then((res) => {
        setSavedBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function removeBook(id) {
    axios
      .delete(`/saved/${id}`)
      .then(() => {
        return axios.get(`/saved`);
      })
      .then((res) => {
        setSavedBooks(res.data);
      });
  }

  const alert = () => {
    Swal.fire({
      title: "Success",
      text: "Book Removed",
      icon: "success",
      confirmButtonText: "OK",
      timer: 1000,
    });
  };

  return (
    <div>
      {SavedBooks.map((books) => {
        return (
          <div>
            <ul>
              <li key={books._id}>
                <h2 className="title">{books.title}</h2>
                <h4 className="author">{books.authors}</h4>
                <div className="container">
                  <div>
                    <div>
                      <img src={books.thumbnail} alt="" />
                    </div>
                    <div>
                      <p>{books.description}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <button type="button">
                    <a href={books.link} target="_blank">
                      Buy Now
                    </a>
                  </button>
                  <button
                    onClick={() => {
                      removeBook(books._id);
                      alert();
                    }}
                  >
                    Remove
                  </button>
                </div>
                <hr />
              </li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default SavedPage;

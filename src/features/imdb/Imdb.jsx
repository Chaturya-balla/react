import React from "react";
import { useGetAllTitlesQuery } from "../../services/imdb";
import { Link } from "react-router-dom";

function Imdb() {
  var { isLoading, data } = useGetAllTitlesQuery();
  return (
    <div>
      <h1>Imdb</h1>
      {isLoading && <h3>Loading...</h3>}
      {!isLoading && (
        <ul className="d-flex flex-wrap list-unstyled gap-3 justify-content-evenly">
          {data?.titles?.map((title) => {
            return (
              <Link to={`/showDetails/${title.id}`}>
                <li>
                  <div class="card" style={{ width: "18rem" }}>
                    <img
                      src={title.primaryImage.url}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5>{title.primaryTitle}</h5>
                      <p class="card-text">{title.plot.slice(0, 40)}</p>
                    </div>
                  </div>
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Imdb;
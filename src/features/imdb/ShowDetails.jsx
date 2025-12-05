import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetCreditsByTitleIdQuery } from "../../services/imdb";

function ShowDetails() {
  var { id } = useParams();
  var { isLoading, data } = useGetCreditsByTitleIdQuery(id);
  return (
    <div>
      <h1>ShowDetails</h1>
      {isLoading && <h4>Loading..</h4>}
      {!isLoading && (
        <ul className="d-flex flex-wrap list-unstyled justify-content-evenly">
          {data?.credits?.map((credit) => {
            return (
              <Link to={`/crewDetails/${credit.name.id}`}>
                <li className="d-flex flex-column p-5 align-items-center">
                  <img
                    src={credit?.name?.primaryImage?.url}
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "50%",
                    }}
                    alt=""
                  />
                  <h5>{credit.name.displayName}</h5>
                  <b>{credit?.category}</b>
                  <b>{credit?.characters?.at(0)}</b>
                </li>
              </Link>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default ShowDetails;
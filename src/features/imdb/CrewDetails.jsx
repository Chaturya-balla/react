import React from "react";
import { useParams } from "react-router-dom";
import { useGetCrewDetailsByNameIdQuery } from "../../services/imdb";

function CrewDetails() {
  var { nid } = useParams();
  var { isLoading, data } = useGetCrewDetailsByNameIdQuery(nid);
  console.log(nid);
  return (
    <div>
      <h1>CrewDetails</h1>
      {isLoading && <h4>Loading...</h4>}
      {!isLoading && (
        <div>
          <div>
            <img src={data?.primaryImage.url} alt="" className="w-25"/>
          </div>
        </div>
      )}
    </div>
  );
}

export default CrewDetails;
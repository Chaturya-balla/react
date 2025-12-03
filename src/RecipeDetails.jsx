import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function RecipeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipe(data));
  }, [id]);

  const goNext = () => {
    navigate(`/recipes/${parseInt(id) + 1}`);
  };

  const goPrevious = () => {
    if (parseInt(id) > 1) navigate(`/recipes/${parseInt(id) - 1}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{color:"brown"}}> {recipe.name}</h1>

      <div style={{ display: "flex", gap: "30px", marginTop: "20px" }}>
        
        {/* Left Side – Image */}
        <div>
          <img
            src={recipe.image}
            alt={recipe.name}
            style={{ width: "300px", borderRadius: "10px" }}
          />
          
           {/* Navigation buttons */}
          <div style={{ marginTop: "30px" }}>
          <button onClick={goPrevious} disabled={parseInt(id) === 1}>
            Previous
          </button>
  
          <button onClick={goNext} style={{ marginLeft: "20px" }}>
            Next
          </button>
          </div>    {/*buttons div*/}
        </div>


        {/* Right Side – Recipe Info */}
        <div style={{ maxWidth: "600px" }}>
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients?.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>

          <h2 style={{ marginTop: "20px" }}>Instructions</h2>
          <p style={{ whiteSpace: "pre-line" }}>{recipe.instructions}</p>

          <h3 style={{ marginTop: "20px" }}>
            Cuisine: <span style={{ color: "green" }}>{recipe.cuisine}</span>
          </h3>

        </div>  {/*right-side recipe*/}
      </div>  {/*flex div*/}
    </div>   /*overall recipe dtetails div */
  );
}

export default RecipeDetails;
import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Recipes(){
    var [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/recipes")
        .then((res) => res.json())
        .then((data) => setRecipes([...data.recipes]));
    }, []);
    
    return(
       <div>
        <h1>Recipes</h1>
        <div className="d-flex">
            <ul>
                {recipes.map((recipe) => {
                    return (
                        <li>
                            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
                        </li>
                    );
                })}
            </ul>
            <div  className="border border-5 border-success p-3 m-3">
                <Outlet></Outlet>
            </div>
        </div>
    </div>
    );
}

export default Recipes;
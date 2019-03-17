import React from "react";

const Recipes = props => (
  <div className="container mt-5">
    <div className="row">
      {props.recipes.map(recipe => {
        return (
          <div key={recipe.recipe_id} className="col-md-4 mt-2 mb-2">
            <div className="card">
              <img
                className="card-img-top embed-responsive-item"
                style={{ width: "100%", height: "15vw", objectFit: "cover" }}
                src={recipe.image_url}
                alt={recipe.title}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {recipe.title.length < 20
                    ? `${recipe.title}`
                    : `${recipe.title.substring(0, 25)}...`}
                </h5>
                <p className="card-text">Publisher: {recipe.publisher}</p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">Read Recipe</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recipes;

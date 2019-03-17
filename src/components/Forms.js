import React from "react";

const Form = props => (
  <div className="col-md-4 offset-md-4">
    <form className="form-inline" onSubmit={props.getRecipe}>
      <div className="form-group m-3">
        <input
          type="text"
          name="recipeName"
          className="form-control"
          placeholder="Type Chicken Biryani, Tandoori.."
        />
        <div className="form-group m-3">
          <button className="btn btn-primary"> Search</button>
        </div>
      </div>
    </form>
  </div>
);

export default Form;

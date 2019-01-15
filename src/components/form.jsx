import React from "react";

const Form = props => (
  <form onSubmit={props.getRestaurants} style={{ marginBottom: "2rem" }}>
    <input className="form__input" type="text" name="cityName" />
    <button className="form__button">Search</button>
  </form>
);

export default Form;

import React from "react";

const Restaurants = props => (
  <div>
    {props.restaurants.map(item => {
      return (
        <div key={item.id}>
          <img src={item.image_url} alt={item.name} />
          <p>
            <b>Name: </b>
            {item.name}
          </p>
          <p>
            <b>Address: </b> {item.address}
          </p>
          <p>
            <b>Price: </b>
            {item.price}
          </p>
        </div>
      );
    })}
  </div>
);

export default Restaurants;

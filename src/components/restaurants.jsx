import React from "react";

const Restaurants = props => (
  <div className="container">
    <div className="row">
      {props.restaurants.map(item => {
        return (
          <div key={item.name} style={{ marginBottom: "2rem" }}>
            <div className="rest__box">
              <img src={item.image_url} alt={item.name} />
              <div className="rest__text">
                <h5 className="rest__title">{item.name}</h5>
                <p className="rest__subtitle">
                  Address: <span>{item.address}</span>
                </p>
                <p className="rest__subtitle">
                  Price: <span>{item.price}</span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Restaurants;

import React from "react";

export const Cat = props => {
  const { name, bio, img } = props.cat;

  return (
    <div className="info">
      <div>
        <h1>{name}</h1>
        <h3>{bio}</h3>
      </div>
      <div>
        <img className="img" src={img} />
      </div>
    </div>
  );
};

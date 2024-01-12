import React from "react";

const Image = ({ age = 50 }) => {
  let age2 = age;
  age2 = 20;
  return (
    <div>
      <p>{age}</p>
      <p>{age2}</p>
      {-20 && <p> wroks</p>}
    </div>
  );
};

export default Image;

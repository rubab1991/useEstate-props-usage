import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const name = "Name : Rubab Bukhari";
  const favplace="FavPlace : KabAb Jees"
  const favdish = "FavDish : Biryani";
  const favcar="FavCar : Mercedes"


  return (
    <div>
      <ChildComponent fullname={name} favdish={favdish} favplace={favplace} favcar={favcar} />
    </div>
  );
};

export default ParentComponent;

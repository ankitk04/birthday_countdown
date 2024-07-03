import React from 'react';
import "./Wish.css"

const Wish = ({ name }) => {
  name = "Ankit"
  return (
    <div className='wish-message'><center>
      HAPPY BIRTHDAY <span className='highlight'>{name.toUpperCase()}</span> !!!</center>
    </div>
  );
};

export default Wish;

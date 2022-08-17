import React, { useState } from 'react';
import data from './data';
import './Birthday.css';

function Birthday() {
  const [people, setPeople] = useState(data);

  const removeItem = id => {
    // Call the setPeople function
    setPeople(oldPeople => {
      let newPeople = oldPeople.filter(person => person.id !== id);
      return newPeople;
    });
  };

  return (
    <div className='section'>
      {people.map(person => {
        const { id, name, age, img } = person;
        return (
          <section key={id}>
            <div className='container'>
              <div>
                <img className='img' src={img} alt={name} />
              </div>
              <div className='items'>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
              <p onClick={() => removeItem(id)}>Remove</p>
            </div>
          </section>
        );
      })}
      <div className='butt'>
        <button className='btn' onClick={() => setPeople([])}>
          Clear All
        </button>
      </div>
    </div>
  );
}

export default Birthday;

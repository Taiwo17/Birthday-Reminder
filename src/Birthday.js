import React, { useState } from 'react';
import data from './data';
import './Birthday.css';

function Birthday() {
  const [people, setPeople] = useState(data);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [image, setImage] = useState('');

  // const [birthday, setBirthday] = useState({
  //   name: '',
  //   age: '',
  //   image: '',
  // });

  const removeItem = (id) => {
    // Call the setPeople function
    setPeople((oldPeople) => {
      let newPeople = oldPeople.filter((person) => person.id !== id);
      return newPeople;
    });
  };

  // const handleChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setBirthday({ ...birthday, [name]: value });
  // };

  const addPeople = (person) => {
    const id = new Date().getTime().toString();
    const newPerson = { id, ...person };
    setPeople([...people, newPerson]);
    console.log(newPerson);
    console.log(people);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addPeople({ name, age, image });
    setName('');
    setAge('');
    setImage('');
  };

  return (
    <div className='wrapper'>
      <div className='section'>
        {people?.map((person, index) => {
          const { id, name, age, img } = person;
          return (
            <section key={index} className={index}>
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
      {/* Adding a new entry to the data */}
      <>
        <div className='formData'>
          <div className='formInfo'>
            <form action='' onSubmit={handleSubmit}>
              <h4>Add your Name to the list</h4>
              <div className='contain'>
                <input
                  type='text'
                  className='inputData'
                  name='name'
                  id=''
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Enter your Name'
                  required
                />
                <input
                  type='text'
                  className='inputData'
                  name='age'
                  id=''
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  placeholder='Enter your Age'
                  required
                />
                <input
                  type='text'
                  name='image'
                  id=''
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className='inputImg'
                  placeholder='Copy an Image URL'
                  required
                />
                <button className='buttOne' type='submit'>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    </div>
  );
}

export default Birthday;

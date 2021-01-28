import React, { useState, Component } from 'react';
import axios from 'axios';



import { CardList } from '../components/card-list/card-list-component';
//import { SearchBox } from '../components/search-box/search-box-component';

import App from '../App'
import Teachers from '../pages/Teachers'

const Register = () => {
  const [state,setState] = useState({
    firstName: "",
    lastName: "",
    schoolCode: "",
  });


  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
      axios.post(
        'http://squigglepark-fullstack-project.us-east-1.elasticbeanstalk.com/api/teachers',
        {
          firstName: state.firstName,
          lastName: state.lastname,
          schoolCode: state.schoolCode
        },
        {
          headers: {
            'Authorization': `tf8P1869GRk2LVNej6YftLl95XNeWbFF`
          }
        }
      )
      .then(response => {console.log(response.firstName);Teachers.setMonsters(response.firstName);})
  }

  return(

      <form method={"post"} onSubmit={handleSubmit}>
        <div>
        <label>First Name</label>
        <input type = 'text' 
              placeholder = 'Enter first name' 
              value={state.firstName}
              onChange={handleChange}
        />
        </div>
        <div>
        <label>Last Name</label>
        <input type = 'text' 
              placeholder = 'Enter last name' 
              value={state.lastName}
              onChange={handleChange}
        />
        </div>
        <div>
        <label>School Code</label>
        <input type = 'text' 
              placeholder = 'Enter school code' 
              value={state.schoolCode}
              onChange={handleChange}
        />
        </div>
        <button type='submit' onClick={ () =>
          handleSubmit(state.firstName, state.lastName, state.schoolCode)}
          >
            Register</button>
        <div>
        </div>
      </form>
  )
  }
export default Register;

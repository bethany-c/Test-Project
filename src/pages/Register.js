import React, { useState } from 'react';
import axios from 'axios';
import './register-style.css'

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
          lastName: state.lastName,
          schoolCode: state.schoolCode
        },
        {
          headers: {
            'Authorization': `tf8P1869GRk2LVNej6YftLl95XNeWbFF`
          }
        }
      )
      .then(response => {console.log(response.state.firstName);})
        .catch(error => console.log(error))
    }

  const onButtonClickHandler = () => {
    window.alert("You have successfully registered. Go to the Teachers page to view.")
  } 

  return(
      <form method={"post"} onSubmit={handleSubmit} className='registerStyle'>
        <div>
        <label>First Name</label>
        <input type = 'text' 
              placeholder = 'Enter first name' 
              name={"firstName"}
              value={state.firstName}
              onChange={handleChange}
        />
        </div>
        <div>
        <label>Last Name</label>
        <input type = 'text' 
              placeholder = 'Enter last name' 
              name={"lastName"}
              value={state.lastName}
              onChange={handleChange}
        />
        </div>
        <div>
        <label>School Code</label>
        <input type = 'text' 
              placeholder = 'Enter school code' 
              name={"schoolCode"}
              value={state.schoolCode}
              onChange={handleChange}
        />
        </div>
        <br></br>
        <button type='submit' onClick={onButtonClickHandler}>Register</button>
        <div>
        </div>
      </form>
  )
}
export default Register;

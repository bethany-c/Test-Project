import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SchoolCardList } from '../components/card-list/card-list-school';

const Schools = () => {
    const [schools,setSchools] = useState([]); //hold data from API

    const fetchSchools = () => {
        axios.get(
        'http://squigglepark-fullstack-project.us-east-1.elasticbeanstalk.com/api/schools',
        )
      .then(response => {console.log(response.data);setSchools(response.data);}) //hold json
  }

  useEffect(() => { //runs once before render
    fetchSchools();
  }, []);

  return (
    <div className='App'>
      <h1>List of Schools</h1>
      <SchoolCardList monsters={schools} />
    </div>
  );
}
export default Schools;

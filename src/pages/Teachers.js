import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { CardList } from '../components/card-list/card-list-component';
import { SearchBox } from '../components/search-box/search-box-component';


const Teachers = () => {
    const [monsters, setMonsters] = useState([]); //hold data from API
    const [shownMonsters, setShownMonsters] = useState([]); //filtered data
    const [searchField, setSearchField] = useState('');
    const [deleteField, setDeleteField] = useState('');
    
    const fetchTeachers = () => {
      axios.get(
      'http://squigglepark-fullstack-project.us-east-1.elasticbeanstalk.com/api/teachers',
      {
          headers: {
          'Authorization': `tf8P1869GRk2LVNej6YftLl95XNeWbFF`
          }
      }
      )
    .then(response => {console.log(response.data);setMonsters(response.data);}) //hold json
    .catch(error => console.log(error))
  }
    const onSearchChange = e => {
    setSearchField(e.target.value); //page rerenders
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      axios.delete(
      'http://squigglepark-fullstack-project.us-east-1.elasticbeanstalk.com/api/teachers/' + deleteField,
      {
        headers: {
          'Authorization': `tf8P1869GRk2LVNej6YftLl95XNeWbFF`
        }
      }
    )
      .catch(error => console.log(error))
      fetchTeachers();
    }
    
  useEffect(() => { //runs once before render
    fetchTeachers();
  }, []);

  useEffect(() => {
    if(searchField === '') {
      setShownMonsters(monsters);
    }
    else{
      setShownMonsters(monsters.filter(monster =>
      monster.id === Number(searchField)))
    }
    
  }, [searchField, monsters])

  const handleChange = (e) => {
    setDeleteField(e.target.value)
  }

  return (
    
    <div className='App'>
      <h1>List of Teachers</h1>
      <SearchBox onSearchChange={onSearchChange} /> 
      <CardList monsters={shownMonsters} />
      
      <form method={"delete"} onSubmit={handleSubmit}>
        <input
              type = 'text' 
              placeholder = 'Delete teacher ID' 
              name={"deleteField"}
              value={deleteField}
              onChange={handleChange}
        />
        <button type='submit'>
            Delete</button>
      </form>
    </div>

  );
}
export default Teachers; 

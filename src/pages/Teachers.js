import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { CardList } from '../components/card-list/card-list-component';
import { SearchBox } from '../components/search-box/search-box-component';
import { DeleteBox } from '../components/search-box/delete-box-component';
import { DeleteConfirm } from '../components/search-box/confirm-delete';



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
  }
    const onSearchChange = e => {
    setSearchField(e.target.value); //page rerenders
    }

    const onDeleteChange = e => {
      setDeleteField(e.target.value);
    }

    

  const deleteTeacher = (teacherId) => {
    axios.delete(
      'http://squigglepark-fullstack-project.us-east-1.elasticbeanstalk.com/api/teachers/' + teacherId,
      {
        headers: {
          'Authorization': `tf8P1869GRk2LVNej6YftLl95XNeWbFF`
        }
      }
    )
    .then(response => 
      this.setState(previousState => {
        return {
          monsters: previousState.monsters.filter(monster =>
            monster.id !== teacherId)
        };
      })
      )
  }


  useEffect(() => {
    if(searchField === '') {
      setShownMonsters(monsters);
    }
    else{
      deleteTeacher(Number(deleteField));
      //setShownMonsters(monsters);
      setShownMonsters(monsters.filter(monster =>
        monster.id !== Number(searchField)))
    }
    
  }, [deleteField, monsters])

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


  return (
    
    <div className='App'>
      <h1>List of Teachers</h1>
      <SearchBox onSearchChange={onSearchChange} /> 
      <CardList monsters={shownMonsters} />
      <DeleteBox onDeleteChange={onDeleteChange}/>
      
    </div>
  );
}
export default Teachers; 


//PROBLEMS

// how to join register page with main page and update
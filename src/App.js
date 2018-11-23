import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import Ajouteur from './Ajouteur';
import Filtreur from './Filtreur';
import Editeur from './Editeur';

class App extends Component {

  handleToggling = (id) => {
    console.log(id + " will be toggling")
  }

  handleDelete = (id) => { 
    console.log(id + " will be deleted")
  }

  handleEdit = (id) => {
    console.log(id + " will be edit")
  }

  handleAjout = (newText) => {
    console.log("On va ajouter " + newText);
  }

  handleFilterToggle = (curVal) => {
    console.log("toggle filtre de " + curVal );
  }

  handleModify = (newVals) => {
    console.log(`will update : ${newVals.id} ${newVals.text} ${newVals.completed} ${newVals.doneAt} !`);
  }

  render() {
    let curDate = new Date();
    let todos = [
      {id: 1, text: "Je suis Todo 1", completed: false, doneAt: ""},
      {id: 2, text: "Je suis Todo 2", completed: true, doneAt: "19/11/2018 15:02"},
      {id: 3, text: "Je suis Todo 3", completed: true, doneAt: "19/11/2018 14:11"},
      {id: 4, text: "Je suis Todo 4", completed: false, doneAt: "19/11/2018 00:02"},
      {id: 5, text: "Je suis Todo 5", completed: false, doneAt: ""},
    ];
    let filterVal = false;

    return (
      <div className="App">
        <header>
          <Ajouteur onHandleAjout={this.handleAjout} /><Filtreur filterOn={filterVal} onHandleFilterToggle={this.handleFilterToggle}/>
        </header>
        <TodoList todos = {todos}
                  filterOn = {filterVal}
                  onHandleToggle = {this.handleToggling}
                  onHandleEdit = {this.handleEdit}
                  onHandleDelete = {this.handleDelete} 
        />
        {filterVal && (<Editeur todo= {todos[0]} onModify={this.handleModify}/>)}
      </div>
    );
  }
}

export default App;

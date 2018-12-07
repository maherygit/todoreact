import React, { Component } from 'react';
import './App.css';
import TodoListContainer from './containers/TodoListContainer';
import AjouteurContainer from './containers/AjouteurContainer';
import FiltreurContainer from './containers/FiltreurContainer';
import EditeurContainer from './containers/EditeurContainer';

import { connect } from 'react-redux';

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
    let noEditMode = (this.props.editMode === -1);

    return (
      <div className="App">
        { (noEditMode) ? 
          (<div>
              <header>
                <AjouteurContainer idCounter={this.props.idCounter}/><FiltreurContainer />
              </header>
              <TodoListContainer />
          </div>)
          :(<EditeurContainer />)
          }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    editMode: state.editMode,
    idCounter: state.idCounter
  }
}

export default connect(mapStateToProps, null)(App);

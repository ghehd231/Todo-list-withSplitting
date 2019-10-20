import React, { Component } from 'react';
import Todolist from '../components/Todolist';
import CreateForm from '../components/CreateForm';
import styled from 'styled-components';

const DefaultApp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 500px;
  width: 500px;
  .test {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
`

class App extends Component {
  id = 3;
  state = {
    todos:[
      {
        id:0,
        text:'첫번째',
        checked: false
      },
      {
        id:1,
        text:'두번째',
        checked: false
      }
    ]
  };
  handleCreate = text => {
    const todoData = {
      id: this.id++,
      text,
      checked: false
    }
    this.setState({
      todos: this.state.todos.concat(todoData)
    })
  }

  handleChecked = id => {
    const nextTodos = this.state.todos.map(todo => {
      if(todo.id === id){
        return {...todo, checked: !todo.checked};
      }
      return todo;
    });

    this.setState({
      todos: nextTodos
    });
  };

  handleDelete = id => {
    const deleted 
    = this.state.todos.filter(todo => todo.id !== id);

    this.setState({
      todos: deleted
    })
  }
  render() {
    return (
      <DefaultApp>
        <CreateForm onSubmit={this.handleCreate} />
        <Todolist todos={this.state.todos} onCheck={this.handleChecked} deleted={this.handleDelete}/>
      </DefaultApp>
    );
  }
}

export default App;
import React, { Component } from 'react';
import Todoitem from './Todoitem';

const TodoList = ({ todos, onCheck, deleted }) => {
    const todoList = todos.map(todo => (
        <div>
            <Todoitem
                id={todo.id}
                key ={todo.id}
                checked={todo.checked}
                text={todo.text}
                onCheck={onCheck}
                deleted={deleted}
            />
        </div>
    ));
    return todoList;
};

export default TodoList;
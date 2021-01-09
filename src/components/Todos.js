import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const StyledMain = styled.div`
  background: linear-gradient(45deg,  #1d1f25 0%,#272245 100%);
  padding: 20px;
  max-width: 380px;
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledButton = styled.button`
  border-radius: 4px;
  color: #FFFFFF;
  font-weight: bold;
  background: linear-gradient(45deg, #6b32ef 0%,#ac33f8 100%);
  border: none;
  padding: 8px 0;
  margin-top: 10px;
`;

const StyledInput = styled.input`
  padding: 8px 8px;
  border-radius: 4px;
  border: none;
  text-align: center;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    border: 1px solid #909090;
    display: flex;
    justify-content: space-between;
    padding: 8px;
    color: #909090;
    margin-bottom: 16px;
    border-radius: 4px;

    .simulateCheckbox {
      border: 1px solid #909090;
      width: 14px;
      height: 14px;
      margin: auto 0;
      position: relative;
      text-decoration: none;
      border-radius: 4px;

      &.crossed + .cross {
        text-decoration: line-through;
      }

      .checkmark {
        font-size: 22px;
        font-weight: bolder;
        position: absolute;
        top: -13px;
        left: 1px;
      }
    }
    .trashcan {
      font-size: 16px;
      margin: auto 0;
    }
  }

`;

const Todos = () => {
  const [ todos, setTodos ] = useState([]);
  const newTodoTitle = useRef(null);
  const NOTDONE = false;

  const handleAddTodo = () => {
    // 1. Create object with new task.
    var newTodo = { title: newTodoTitle.current.value, done: NOTDONE }
    // 2. Add the new object to the state
    setTodos([ ...todos, newTodo ]);
  }

  const handleDeleteTodo = (ketToDel) => {
    setTodos(todos.filter((todo, key) => key !== ketToDel))
  }

  const listTodos = () => {
    return (
      <ul>
        {
          todos.map((index, key) => (
            <li key={key}>{index.title}<span onClick={() => handleDeleteTodo(key)}>deleteTodo</span></li>
          ))
        }
      </ul>
    )
  }
  

  return (
    <StyledMain>
      {/* Title */}
      <h1>My TODOList</h1>
      {/* List of todos */}
      {listTodos()}
      {/* Input */}
      <input type="text" ref={newTodoTitle} /> 
      {/* button that adds to the list */}
      <button onClick={handleAddTodo}>Add Task</button>
    </StyledMain>
  )
}

export default Todos;
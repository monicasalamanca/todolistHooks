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

const Main = () => {
  const [tasks, setTask] = useState([]);
  const newTask = useRef(null);

  const setNewTask = () => {
    var taskObj = { title: newTask.current.value, done: false };
    setTask(prevState => prevState.concat(taskObj));
    newTask.current.value = "";
  }

  const deleteTask = (tskToDel) => {
    setTask(tasks.filter((task, key) => key !== tskToDel))
  }

  const toggleTask = async (keyVal) => {
    // 1. Find the element that we need to toggle in this case is keyval

    // 2. Create a copy of the state array
    var newTasks = [ ...tasks ];

    // 3. Update the value that we need only
    newTasks[keyVal] = { ...newTasks[keyVal], done: !newTasks['done'] };
    console.log(newTasks);

    // 4. setState with the new task list
    setTask(newTasks);

  }

  const listTasks = (taskList) => {
    return (
      Object.values(taskList).map((task, key) => (
        <li key={key}>
          <span className={`simulateCheckbox ${ task.done ? 'crossed' : ''} `} onClick={()=> toggleTask(key)}>
            {
              task.done ? <span className="checkmark">&#10003;</span> : null
            }
          </span>
          <span className={ task.done ? `cross` : `` }>{task.title}</span> 
          <span className="trashcan" onClick={()=> deleteTask(key)}><i className="fas fa-trash"></i></span>
        </li>
      ))
    )
  }

  return (
    <StyledMain>
      <h1>My TODOList</h1>
      <StyledList>{ listTasks(tasks) }</StyledList>
      <StyledInput type="text" ref={newTask} />
      <StyledButton onClick={() => setNewTask()} >Add Task</StyledButton>
    </StyledMain>
  )
}

export default Main;
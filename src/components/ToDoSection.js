import React from 'react';
import ToDoList from "./ToDoList";
import AddToDo from './AddToDo';
import FilterButtons from './FilterButtons';
import { H1 } from './StyledH1';

const ToDoSection = () => {

   return (
      <section className="todo-list" style={{ textAlign: 'center' }}>
         <H1>To Do List</H1>
         <AddToDo />
         <FilterButtons />
         <ToDoList />
      </section>
   );
}

export default ToDoSection;
import React from 'react';
import { connect } from 'react-redux';
import { toggleTask } from '../actions/toggleTask.action'

const ToDoItem = ({ todoList, filterType, toggleTask }) => {
   const handleToggleTodo = (id) => {
      toggleTask(id)
   }
   const filteredList = () => {
      switch (filterType) {
         case 'ACTIVE':
            return todoList.filter(item => !item.complete)
         case 'COMPLETED':
            return todoList.filter(item => item.complete)
         default:
            return todoList
      }
   }
   const listItems = filteredList().map(item => (
      <li key={item.id} style={item.complete ? { textDecoration: 'line-through', color: 'red' } : null} onClick={() => handleToggleTodo(item.id)}>{item.name}</li>
   ))

   return (
      <ul>
         {listItems}
      </ul>
   );
}

const MapStateToProps = state => ({
   todoList: state.todos,
   filterType: state.filter,
})

const MapDispatchToProps = dispatch => ({
   toggleTask: id => dispatch(toggleTask(id))
})

export default connect(MapStateToProps, MapDispatchToProps)(ToDoItem);
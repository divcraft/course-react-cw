import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/addTodo.action';
import { clearTodoList } from '../actions/clearTodoList.action';
import { clearTodoInput } from '../actions/clearTodoInput.action';
import { changeTodoInput } from '../actions/changeTodoInput.action';

const AddToDo = ({ inputValue, addTodo, changeTodoInput, clearTodoInput, clearList }) => {
   const handleChangeInput = e => {
      changeTodoInput(e.target.value)
   }
   const handleSubmit = e => {
      e.preventDefault()
      addTodo(inputValue)
      clearTodoInput()
   }
   const handleClearList = () => {
      clearList()
   }
   return (
      <>
         <form onSubmit={handleSubmit} className="add-todo" style={{ padding: 10 }}>
            <label>Wpisz zadanie<input style={{ marginLeft: 10 }} onChange={handleChangeInput} value={inputValue} type="text" /></label> <br />
            <button style={{ marginTop: 5 }}>Dodaj</button>
         </form>
         <button onClick={handleClearList}>Wyczyść listę</button>
      </>
   );
}

const mapStateToProps = state => ({
   inputValue: state.todoInput
})

const mapDispatchToProps = dispatch => ({
   addTodo: text => dispatch(addTodo(text)),
   changeTodoInput: value => dispatch(changeTodoInput(value)),
   clearTodoInput: () => dispatch(clearTodoInput()),
   clearList: () => dispatch(clearTodoList()),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);
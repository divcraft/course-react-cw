const todoInput = (state = '', action) => {
   switch (action.type) {
      case 'CHANGE_TODO_INPUT':
         return action.value
      case 'CLEAR_TODO_INPUT':
         return action.clearedInput
      default:
         return state
   }
}

export default todoInput
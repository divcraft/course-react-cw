let id = 2

const todo = (state = [{ id: 0, name: 'get the course finished', complete: false }, { id: 1, name: 'get the course finished', complete: true }], action) => {
   switch (action.type) {
      case 'ADD_TODO':
         return [
            ...state,
            {
               id: id++,
               name: action.name,
               complete: action.complete,
            }
         ]
      case 'CLEAR_TODO':
         return action.emptyList
      case 'TOGGLE_TODO':
         return state.map(todo => ({
            ...todo,
            complete: action.id === todo.id ? !todo.complete : todo.complete
         }
         ))
      default:
         return state
   }

}

export default todo  
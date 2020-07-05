export const addTodo = text => {
   // if (!text) return alert('wpisz zadanie')
   return {
      type: "ADD_TODO",
      id: 1,
      name: text,
      complete: false
   }
}

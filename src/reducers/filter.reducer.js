const reducer = (state = 'ALL', action) => {
   switch (action.type) {
      case 'FILTER_TODO':
         return action.filterType
      default:
         return state
   }
}

export default reducer
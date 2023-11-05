const instialState = [
  {
    id: 'SHOW_ALL',
    label: 'All',
    selected: true,
  },
  {
    id: 'SHOW_COMPLETED',
    label: 'Completed',
    selected: false,
  },
  {
    id: 'SHOW_ACTIVE',
    label: 'Active',
    selected: false,
  },
]; 
const filters = (state = instialState, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return state.map((filter) => {
        if(filter.id === action.filter) {
          return {
            ...filter,
            selected: true,
          }
        }
        return { ...filter, selected: false };
      });
    default:
      return state
  }
}

export default filters
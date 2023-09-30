const initialState = {
    todo: []
};
const rootReducer = (state = initialState, action) => {
  
    switch(action.type){
        case "ADD_TODO":
            return {...state, todo: [...state.todo, action.payload]};
        case "COMPLETE_TODO":
            const updatedTodoList = state.todo.map((todo, index) => {
                if (index === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            });
            return { ...state, todo: updatedTodoList };
        case "ROOT_PURGE":
            return initialState;
        default:
            return state;
    }

}

export default rootReducer;
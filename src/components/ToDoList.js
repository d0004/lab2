import React, { useEffect } from "react";
import CreateTodo from "./CreateTodo";
import { useSelector, useDispatch } from "react-redux";

const ToDoList = () => {

    const dispatch = useDispatch();
    const todo = useSelector((state) => state.rootReducer.todo);

    useEffect(() => {
        console.log(todo);
    }, [todo]);

    const toggleCheckbox = (index) => {
        dispatch({type: 'COMPLETE_TODO', payload: index});
        console.log(index);
    }

    return (
        <>
            <CreateTodo />
            <div onClick={() => dispatch({type: "ROOT_PURGE"})}>Clead all</div>
            <div className="todoWrap">
                {todo.map((element, index) => {
                    return(
                        <div key={index} className={["todoElement", element.completed ? "todoElement-completed" : ""].join(" ")}>
                            <input type="checkbox" checked={element.completed} onChange={() => toggleCheckbox(index)} />
                            <div>{element.title}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )

}

export default ToDoList;
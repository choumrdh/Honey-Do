import React, { useState } from 'react';
import TodoForm from "./ToForm";

const TodoList = () => {
    const [todos, setTodos] =useState([]);

    const addTodo = todo =>{
       if(!todo.text || /^\s*$/.test(todo.text)){
           return;
       }
        const newTodos = [todo,...todos]

        setTodos(newTodos)
        console.log(...todos)
    }
    return ( 
        <div>
            <h1>Need to get done</h1>
            <TodoForm onSubmit={addTodo}/>
        </div>
     );
}
 
export default TodoList;

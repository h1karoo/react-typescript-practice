import React from "react";
import { TodoItem } from "./TodoItem/TodoItem";
import { TodoPanel } from '../TodoPanel/TodoPanel';

interface TodoListProps {
    todos: Todo[];
    todoIdForEdit: Todo['id'] | null;
    changeTodo: ({name, description}: Omit<Todo, 'checked' | 'id'>) => void;
    checkTodo: (id: Todo['id']) => void;
    deleteTodo: (id: Todo['id']) => void;
    setTodoIdForEdit: (id: Todo['id']) => void;
}

export const TodoList: React.FC<TodoListProps> = ({todos, todoIdForEdit, checkTodo, deleteTodo, setTodoIdForEdit, changeTodo}) => {

    return <div>
        {todos.map(todo => {
            if(todo.id === todoIdForEdit) return <TodoPanel  
            key={todo.id} 
            mode = 'edit' 
            changeTodo={changeTodo}
            editTodo={{name: todo.name, description: todo.description}}/>;
        
        return (
            
                <TodoItem key = {todo.id} 
                todo={todo} 
                checkTodo = {checkTodo} 
                deleteTodo = {deleteTodo} 
                setTodoIdForEdit = {setTodoIdForEdit}/>
            );
        }
        )
        }
    </div>
}
import React from "react";

import styles from './TodoPanel.module.css'

const DEFAULT_TODO = {
    name: '',
    description: ''
}

export const TodoPanel = () => {
    const [todo, setTodo] = React.useState(DEFAULT_TODO);
    console.log('@todo', todo)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target
        setTodo({...todo, [name]: value});
    };


    return <div className={styles.todo_panel_container}>
    <div className={styles.fields_container}>
      <div className={styles.field_container}>
        <label htmlFor='name'>
          <div>name</div>
          <input autoComplete='off' id='name' value={todo.name} onChange={onChange} name='name' />
        </label>
      </div>
      <div className={styles.field_container}>
        <label htmlFor='description'>
          <div>description</div>
          <input
            autoComplete='off'
            id='description'
            value={todo.description}
            onChange={onChange}
            name='description'
          />
        </label>
      </div>
    </div>
        <div className={styles.button_container}>
            <button>Add</button>
        </div>
    </div>


}
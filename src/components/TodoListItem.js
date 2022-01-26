import React from 'react';

export const TodoListItem = ({ todo, index, handleToggle, handleDelete }) => {
    return (
        <li key={todo.id}
            className='list-group-item item '>
            
            <p className={`${todo.done && 'complete'}`}
                onClick={() => handleToggle(todo.id)}
            >{index + 1}. {todo.desc}</p>

            <button className='btn btn-danger ms-2'
                onClick={() => handleDelete(todo.id)}
            >X</button>

        </li>
    )

};

import React from 'react';
import { useForm } from '../useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [{ description }, handleInputChange, reset] = useForm({
        description: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if (description.trim().length === 0) {
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTodo(newTodo);
        reset()

    }

    return <>


        <form onSubmit={handleSubmit} className='d-flex '>
            <input
                type="text"
                name="description"
                placeholder="Nuevo ToDo..."
                autoComplete="off"
                onChange={handleInputChange}
                value={description} />

            <button className='btn btn-primary boton_agregar'
                type='submit'>ADD</button>
        </form>

    </>;
};

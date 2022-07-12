import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos } from '../Service/TodosAction';

const Todos = () => {
    const { todos, isLoading, error } = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(todos);

    useEffect(() => {
        dispatch(getAllTodos())
    }, [])

    return (
        <div className=' text-xl'>
            <h2>Todos App</h2>
            {
                isLoading && <div>
                    Loading...........
                </div>
            }
            {
                error && <div className=' text-red-600'>
                    {error.message}
                </div>
            }
            <section>
                {todos && todos.map(todo => <article key={todo.id}>
                    <h3>{todo.id}</h3>
                    <h3>{todo.title}</h3>
                </article>)

                }
            </section>
        </div>
    );
};

export default Todos;
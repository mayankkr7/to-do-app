import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault();

        if (!todo) return

        addTodo({ todo, completed: false })
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write here..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 text-black bg-white"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg font-semibold px-3 py-1 bg-[#846c3a] hover:bg-[#6b582f] active:bg-[#504123] text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;


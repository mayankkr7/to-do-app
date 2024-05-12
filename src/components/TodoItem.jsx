import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }
    const toggleCompleted = () => {
        //console.log(todo.id);
        toggleComplete(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#78A083]" : "bg-[#b1e6b3]"}`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                    } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            <button
                className="inline-flex p-2 text-xs font-semibold rounded-lg border border-black/10 justify-center items-center bg-gray-100 hover:bg-gray-200 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "Save" : "Edit"}
            </button>

            <button
                className="inline-flex p-2 text-xs font-semibold rounded-lg border border-black/10 justify-center items-center bg-red-100 hover:bg-red-200 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                Delete
            </button>
        </div>
    );
}

export default TodoItem;



































// // key/id error :-

// import React, { useState } from 'react'
// import { useTodo } from '../contexts/TodoContext';

// function TodoItem(props) {
//     const [isTodoEditable, setIsTodoEditable] = useState(false)
//     const [todoMsg, setTodoMsg] = useState(props.todo.todo)
//     const {updateTodo, deleteTodo, toggleComplete} = useTodo()

//     const editTodo = () => {
//         updateTodo(props.todo.id, {...props, todo: todoMsg})
//         setIsTodoEditable(false)
//     }
//     const toggleCompleted = () => {
//         toggleComplete(props.todo.id)
//     }

//     return (
//         <div
//             className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
//                 props.todo.completed ? "bg-[#78A083]" : "bg-[#b1e6b3]"
//             }`}
//         >
//             <input
//                 type="checkbox"
//                 className="cursor-pointer"
//                 checked={props.todo.completed}
//                 onChange={toggleCompleted}
//             />
//             <input
//                 type="text"
//                 className={`border outline-none w-full bg-transparent rounded-lg ${
//                     isTodoEditable ? "border-black/10 px-2" : "border-transparent"
//                 } ${props.todo.completed ? "line-through" : ""}`}
//                 value={todoMsg}
//                 onChange={(e) => setTodoMsg(e.target.value)}
//                 readOnly={!isTodoEditable}
//             />
//             <button
//                 className="inline-flex p-2 text-xs font-semibold rounded-lg border border-black/10 justify-center items-center bg-gray-100 hover:bg-gray-200 shrink-0 disabled:opacity-50"
//                 onClick={() => {
//                     if (props.todo.completed) return;

//                     if (isTodoEditable) {
//                         editTodo();
//                     } else setIsTodoEditable((prev) => !prev);
//                 }}
//                 disabled={props.todo.completed}
//             >
//                 {isTodoEditable ? "Save" : "Edit"}
//             </button>

//             <button
//                 className="inline-flex p-2 text-xs font-semibold rounded-lg border border-black/10 justify-center items-center bg-red-100 hover:bg-red-200 shrink-0"
//                 onClick={() => deleteTodo(props.todo.id)}
//             >
//                 Delete
//             </button>
//         </div>
//     );
// }

// export default TodoItem;


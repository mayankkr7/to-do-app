import React, { useState, useEffect } from 'react'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([]);
  const year = new Date().getFullYear();

  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)));
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? {
          ...prevTodo,
          completed: !prevTodo.completed
        } : prevTodo));
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));

    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])




  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <header className="text-white py-4 text-center">
        <h1 className='text-xl font-bold'>To-do App</h1>
      </header>

      <div className="h-auto py-8 w-auto mx-4 mt-4">
        <div className="bg-[#35374B] w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Check List</h1>
          <div className="mb-4">
            {/* Inserting Todo form here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3 mb-2">
            {/* To display TodoItem (loop) */}
            {todos.map((todo) => (
              <div key={todo.id}
                className='w-full'
              >
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <footer className='text-white py-2 text-center font-light text-xs absolute bottom-0 w-full'>
        <p>&copy; Copyright {year}. All Rights Reserved.</p>
      </footer>
    </TodoProvider>
  )
}

export default App


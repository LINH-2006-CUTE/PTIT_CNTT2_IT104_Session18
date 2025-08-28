import React, { useState, useEffect } from "react";
import "./todo.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("todos");
    if (stored) {
      setTodos(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function addTodo(event) {
    event.preventDefault();
    if (!input) return;  // Kiểm tra input không rỗng, không loại bỏ khoảng trắng

    const newTodo = {
      id: todos.length + 1, // id tự tăng đơn giản
      content: input,
    };

    setTodos([...todos, newTodo]);
    setInput("");
  }

  function deleteTodo(id) {
    if (window.confirm("Bạn có chắc chắn muốn xóa công việc này?")) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  }

  return (
    <div className="todo-container">
      <h2>Danh sách công việc</h2>

      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          placeholder="Nhập tên công việc"
          value={input}
          onChange={e => setInput(e.target.value)}
          className="todo-input"
        />
        <button type="submit" className="todo-button">Thêm</button>
      </form>

      {todos.length === 0 ? (
        <p className="no-todo">Chưa có công việc nào</p>
      ) : (
        <div className="todo-list">
          {todos.map(todo => (
            <div key={todo.id} className="todo-item">
              <span>{todo.content}</span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="delete-button"
              >
                Xóa
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

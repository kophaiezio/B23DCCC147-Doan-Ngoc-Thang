
import React, { useState, useEffect } from 'react';
import ToDoItem from "./ToDoItem";
import { PlusCircleOutlined } from '@ant-design/icons';
import axios from 'axios';

const ToDoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3010/todos')
            .then(response => {
                setTodos(response.data);
            })
            .catch(error => console.error("Lỗi khi tải dữ liệu:", error));
    }, []);

    const addTodo = () => {
        const newTodo = { 
            title: "New Task", 
            description: "This is a new task description",
            due_date: "2024-10-10 09:00"
        };
        axios.post('http://localhost:3010/todos', newTodo)
            .then(response => {
                setTodos([...todos, response.data]);
            })
            .catch(error => console.error("Lỗi khi thêm dữ liệu:", error));
    };

    // Hàm xóa một todo
    const deleteTodo = (id) => {
        axios.delete(`http://localhost:3010/todos/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo.id !== id));
            })
            .catch(error => console.error("Lỗi khi xóa dữ liệu:", error));
    };

    // Hàm cập nhật một todo
    const updateTodo = (id, updatedData) => {
        return axios.put(`http://localhost:3010/todos/${id}`, updatedData)
            .then(response => {
                console.log('Cập nhật thành công:', response.data);
                
                // Cập nhật lại state `todos`
                setTodos(prevTodos => prevTodos.map(todo =>
                    todo.id === id ? { ...todo, ...updatedData } : todo
                ));
    
                return response.data;
            })
            .catch(error => {
                console.error("Lỗi khi cập nhật dữ liệu:", error);
                throw error;
            });
    };
    
    


    return (
        <div className="ToDoList" style={{ marginLeft: '10px' }}>
            <h1>My work 🎯</h1>
            <div>
                {todos.map(todo => (
                    <ToDoItem
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        description={todo.description}
                        dueDate={todo.due_date}
                        onDelete={() => deleteTodo(todo.id)}
                        onEdit={(updatedData) => updateTodo(todo.id, updatedData)}
                    />
                ))}
            </div>
            <div style={{ marginTop: '5px', cursor: 'pointer' }} onClick={addTodo}>
                <PlusCircleOutlined style={{ fontSize: '20px', color: '#d1453b' }} /> Add Task
            </div>
        </div>
    );
};

export default ToDoList;

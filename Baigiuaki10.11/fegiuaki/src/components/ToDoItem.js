// ToDoItem.js
import React, { useState } from 'react';
import './style.css';
import { format, isValid, parseISO } from 'date-fns';
import { EditOutlined, DeleteOutlined, SaveOutlined } from '@ant-design/icons';

const ToDoItem = (props) => {
    const dueDateObject = props.dueDate ? parseISO(props.dueDate) : null;
    const dueDateFormat = dueDateObject && isValid(dueDateObject)
        ? format(dueDateObject, 'dd MMMM yyyy HH:mm')
        : 'No Due Date';
    

    
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(props.title);
    const [newDescription, setNewDescription] = useState(props.description || '');

    // Hàm chuyển sang chế độ chỉnh sửa
    const handleEditClick = () => {
        setIsEditing(true);
    };

    // Hàm lưu lại các thay đổi
    const handleSave = () => {
        if (newTitle.trim() === "") {
            alert("Title không được để trống!");
            return;
        }

        const updatedData = {
            title: newTitle,
            description: newDescription,
            due_date: props.dueDate,
            completed: 1,
        };

        // Gọi hàm onEdit để cập nhật task
        props.onEdit(updatedData)
            .then(() => {
                setIsEditing(false); // Chỉ thoát chế độ chỉnh sửa khi cập nhật thành công
            })
            .catch(error => {
                console.error("Lỗi khi lưu dữ liệu:", error);
                alert("Không thể lưu dữ liệu. Vui lòng thử lại!");
            });
    };

    return (
        <div className="ToDoItem">
            <input type="checkbox" />
            <div className="ItemContent">
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                            placeholder="Edit Title"
                        />
                        <textarea
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            placeholder="Edit Description"
                        />
                    </>
                ) : (
                    <>
                        <p className="Title">{props.title}</p>
                        <p className="Description">{props.description}</p>
                    </>
                )}
                <p className="DueDate">{dueDateFormat}</p>
            </div>
            <div className="Action">
                {isEditing ? (
                    <SaveOutlined onClick={handleSave} />
                ) : (
                    <EditOutlined onClick={handleEditClick} />
                )}
                <DeleteOutlined onClick={props.onDelete} />
            </div>
        </div>
    );
};

export default ToDoItem;


import React from "react";
import './todolist.css'

function TodoList(props) {
    return (
        <ul id="todoList" className="todo-list">
            {props.todoList.map((item, i) => {
                return  <li key={i} className="list-item">
                            {item.desc}
                            <div className="buttons-div">
                                <button id={i} onClick = {props.printHandler} className="close-btn">+</button>
                                <button id={i} onClick={props.closeHandler} className="close">-</button>
                            </div>
                        </li>
            })}
        </ul>
    )
} 

export default TodoList;
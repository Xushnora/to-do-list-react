import React, { useState } from "react";
import Container from "../../Hoc/Container/Container";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import './todo.css'


function Todo() {

    let [texts, setTexts] = useState("")
    let [objArr, setObjArr] = useState([])

    console.log(objArr);

    function closeHandler(e) {
        console.log(e.target);
    }

    function printHandler(e) {
        console.log(e.target);
    }

    return (
       <Container >
            <div className="inner-container">
                <h2 className="todo-title">My To Do List</h2>
                <TodoForm  
                    setTexts = {setTexts}
                    texts = {texts}
                    setObjArr = {setObjArr}
                    objArr = {objArr}
                />
                <TodoList 
                    todoList = {objArr}
                    setObjArr = {setObjArr}
                    closeHandler = {closeHandler}
                    printHandler = {printHandler}
                />
            </div>
       </Container>
    )
}

export default Todo;
import React from "react";
import './todoForm.css';

const oldObjArr = []

function TodoForm(props) {
    const inputText = (e) => {
        props.setTexts(e.target.value)
    }

    const formSubmit = (e) => {
        e.preventDefault();

        const newObj = {
            desc: props.texts,
            isTrue: false
        }

        
        props.setObjArr(prevArr => [...prevArr, newObj]);
        e.target.reset()
        
        oldObjArr.push([...oldObjArr, newObj])
        // console.log(oldObjArr);
    }

    return (
        <form id="form" className="todo-form" onSubmit={formSubmit}>
            <input 
                className="todo-input"
                type="text" 
                placeholder="Add list items"
                id="text"
                onChange={inputText}
            />
            <button className="todo-btn" type="submit">add</button>
        </form>
    )
}

export default TodoForm;
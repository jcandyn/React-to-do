import React from "react"
import todoData from "./todoData";



function TodoItem(props) {
    return  (
        <div className="to-doItem">
    <input onChange={() => props.handleClick(props.item.id)}type="checkbox" checked={props.completed}></input>
    <p className="item">{props.text}</p>
    </div>
    )
}

export default TodoItem
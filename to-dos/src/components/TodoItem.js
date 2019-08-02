import React from "react"



function TodoItem(props) {
    return  (
        <div className="to-doItem">
    <input onChange={() => console.log("input changed")}type="checkbox" checked={props.completed}></input>
    <p className="item">{props.text}</p>
    </div>
    )
}

export default TodoItem
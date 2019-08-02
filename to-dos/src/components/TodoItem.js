import React from "react"
import { tsPropertySignature } from "@babel/types";


function TodoItem(props) {
    return  (
        <div className="to-doItem">
    <input type="checkbox" checked={props.completed}></input>
    <p className="item">{props.text}</p>
    </div>
    )
}

export default TodoItem
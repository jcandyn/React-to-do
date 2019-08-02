import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todoData.js"
// import { tsPropertySignature } from "@babel/types";


// function List() {

//     const todoComponents = todosData.map(
//         todo => <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />)
//     return <div className="to-doList">
//             {todoComponents}
//             </div>
// }

class List extends React.Component {

    constructor() {
        super()
        this.state = {
            todos: todosData
        }
    }
    render() {
        const todoComponents = this.state.todos.map(
            todo => <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />)
        return (
             <div className="to-doList">
                    {todoComponents}
                    </div>
        )
    }

}
    


export default List
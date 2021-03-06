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
            todos: todosData,
            // completed: todosData.completed
           
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
        // console.log("Changed", id)
    }

    render() {
        const todoComponents = this.state.todos.map(
            item => <TodoItem key={item.id} text={item.text} completed={item.completed} item={item} handleClick={this.handleClick}/>)
        return (
             <div className="to-doList">
                    {todoComponents}
                    </div>
        )
    }

}
    


export default List
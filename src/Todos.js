import React from 'react'

const Todos = (props) => {
    
    const todoList = props.todos.length ? (
        props.todos.map((todo) => {
            return (
                <div key = {todo.id} className="collection-item">
                    <span onClick = {() => props.deleteTodo(todo.id)}>{todo.content}</span>
                </div>
            )
        })
    ) : (
            <p className="center">You have no todo's left</p>
    )
    
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos
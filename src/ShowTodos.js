import React from 'react';
const Show = ({todos , delTodo}) => {
   
    return(
        <div>
            {
                todos.length > 0 ? (
                    todos.map(todo=>{
        return(
            <div className="todo" key={todo.id}>
                <p>{todo.Content}</p>
                <button onClick={()=>{delTodo(todo.id)}}>Delete Todo</button>
            </div>
        )
    })
                ): (
                    <p>you not have any todos yet</p>
                )
            }
        </div>
    )
}
export default Show;

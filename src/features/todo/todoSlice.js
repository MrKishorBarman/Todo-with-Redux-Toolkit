// in redux-toolkit features are called slice..

import { createSlice, nanoid } from "@reduxjs/toolkit";   //* nonoid generates unique ids


export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todos: []
    },
    reducers: {

        addTodo: (state, action) => {

//*  state represents the current state of the Redux store when the reducer is called.

//*  action is an object that describes the action that occurred. It typically has a type property indicating the type of action and may contain additional data in its payload property. The payload often carries the data needed to update the state.

            const todo = {
                id: nanoid(),
                text: action.payload   // The action.payload refers to the data that is passed along with the addTodo action when it's dispatched. In this case, it likely represents the text of the todo item that the user wants to add.
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)    // you're assigning this new array back to state.todos, effectively removing the todo with the specified id
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo)=> todo.id === action.payload.id ? action.payload : todo)
            // action.payload likely contains the updated todo item & replaces the existing todo item with the same id in the state.todos array.
        }
    }
})

// These functionalities gonna be used inidividually later on, so gotta be exported
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

// if you have a slice named todoSlice, you can access its action creators using todoSlice.actions.

//This allows you to directly use these action creators to dispatch actions in your application without having to manually define them.


export default todoSlice.reducer
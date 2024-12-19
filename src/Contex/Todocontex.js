import { createContext,useContext } from "react";

export const Todocontex = createContext({
    todos:[
        {
            id : 1,
            todo:"todo msg",
            complted : false,
        }
    ],
    addTodo: (todo) => {},
    updatedTodo: (id,todo) => {},
    deleteTodo:(id) => {},
    toggleComplete:(id) => {}
})


export const useTodo = ()=>{
    return useContext(Todocontex)
}

export const Todoprovider = Todocontex.Provider
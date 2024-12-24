import React, { useState } from "react";
import { useTodo } from "../Contex/Todocontex";

function TodoForm() {
  const [inputValue, setInputValue] = useState("");
  const [cat,setCat] = useState("Work");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    addTodo({ todo: inputValue.trim(), completed: false });
    setInputValue("");
    setCat("work");
  };

  return (
    <form onSubmit={add} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-[#9f86c0] text-white py-1.5"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-[#5e548e] text-white shrink-0">
        Add
      </button>
    </form>
  );
}

export default TodoForm;

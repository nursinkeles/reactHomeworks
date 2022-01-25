import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";

function Todos() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div className="container">
      <List addTodos={setTodos} todos={todos} />
      <Form addTodos={setTodos} todos={todos} />
    </div>
  );
}

export default Todos;

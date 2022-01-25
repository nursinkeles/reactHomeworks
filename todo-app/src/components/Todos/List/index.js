import { useState } from "react";

function List({ todos, addTodos }) {
  const [filterText, setFilterText] = useState("");
  const [checked, setChecked] = useState(false);

  const filtered = todos.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });
  function handleDeleteClick(id) {
    delete todos[id];
    console.log(todos);
    let removeItem = [...todos].splice(id, 1);
    addTodos(removeItem);
  }
  console.log("filtered", filtered);
  console.log(checked);
  return (
    <div className="todos-container">
      <input
        placeholder="Filter Todos"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      {filtered.map((todo) => (
        <ul>
          {" "}
          <li key={todo.id}>
            {" "}
            <input
              type="checkbox"
              onChange={(e) => {
                e.target.checked ? (todo.done = true) : (todo.done = false);
                setChecked(todo.done);
              }}
            />
            {todo.todo_text}{" "}
            <button onClick={() => handleDeleteClick(todo.id)}>X</button>
          </li>{" "}
        </ul>
      ))}
      Total todos : {filtered.length}
    </div>
  );
}

export default List;

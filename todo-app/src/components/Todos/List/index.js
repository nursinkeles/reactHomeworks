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
    let updatedRows = [...todos];
    updatedRows.splice(id, 1);
    addTodos(updatedRows);
  }
  console.log("filtered", filtered);

  console.log(checked);
  return (
    <div className="todos-container">
      <input
        className="filter"
        placeholder="Filter Todos"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <div className="todo-list">
        {filtered.map((todo) => (
          <ul>
            {todo.done ? (
              <li key={todo.id} className="line">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    e.target.checked ? (todo.done = true) : (todo.done = false);
                    setChecked(todo.done);
                    // todo.done ? setTextStyle("line") : setTextStyle("");
                  }}
                />
                {todo.todo_text}
                <button onClick={() => handleDeleteClick(todo.id)}>X</button>
              </li>
            ) : (
              <li key={todo.id}>
                <input
                  type="checkbox"
                  onChange={(e) => {
                    e.target.checked ? (todo.done = true) : (todo.done = false);
                    setChecked(todo.done);
                    // todo.done ? setTextStyle("line") : setTextStyle("");
                  }}
                />
                {todo.todo_text}
                <button onClick={() => handleDeleteClick(todo.id)}>X</button>
              </li>
            )}
          </ul>
        ))}
      </div>
      Total todos : {filtered.length}
    </div>
  );
}

export default List;

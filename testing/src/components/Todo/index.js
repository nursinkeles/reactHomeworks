import { useState } from "react";

function Todo() {
  const defaultItem = [
    {
      name: "Item A",
    },
    {
      name: "Item B",
    },
    {
      name: "Item C",
    },
  ];
  const [text, setText] = useState("");
  const [items, setItems] = useState(defaultItem);
  const addItem = () => {
    setItems((prev) => [...prev, { name: text }]);
    setText("");
  };
  return (
    <div>
      <label>
        Text
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>{" "}
      <button onClick={addItem}>Add</button>
      <br />
      <br />
      {items.map((item, key) => (
        <div key={key}>{item.name}</div>
      ))}
    </div>
  );
}

export default Todo;

import { useState } from "react";

function Form({ addTodos, todos }) {
  const initialFormValue = { todo_text: "", done: false };
  const [form, setForm] = useState(initialFormValue);
  const onChangeInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.todo_text === "") {
      return false;
    }

    addTodos([...todos, form]);
    setForm(initialFormValue);
    console.log(form);
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        name="todo_text"
        placeholder="Add todos.."
        onChange={onChangeInput}
        value={form.todo_text}
      />{" "}
      <br />
      <button>Add</button>
    </form>
  );
}

export default Form;

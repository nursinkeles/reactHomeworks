import { useState } from "react";

function Form({ addContact, contacts }) {
  const initialFormValue = { fullname: "", phone_number: "" };
  const [form, setForm] = useState(initialFormValue);
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }
    addContact([...contacts, form]); //contacts  ı da prop olarak alarak eski verileri de korumuş oluruz
    setForm(initialFormValue); //diğer yöntem contacts eklendiğinde temizleme işlemi yapılır useeffect kullanılarak
    console.log(form);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        name="fullname"
        placeholder="Full Name"
        onChange={onChangeInput}
        value={form.fullname}
      />{" "}
      <br />
      <input
        name="phone_number"
        placeholder="Phone Number"
        onChange={onChangeInput}
        value={form.phone_number}
        type="number"
      />
      <br />
      <button>Add</button>
    </form>
  );
}

export default Form;

import { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });
  console.log("filtered", filtered);
  return (
    <div>
      Contact List <br />
      <input
        placeholder="Filter Contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <ul>
        {filtered.map((contact, id) => (
          <li key={id}>{contact.fullname}</li>
        ))}
      </ul>
      Total contacts : {filtered.length}
    </div>
  );
}

export default List;

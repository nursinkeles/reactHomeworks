import React, { useState } from "react";

function InputExample() {
  const [name, setName] = useState();
  return (
    <div>
      Please enter a name <br />
      <input
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <br />
      {name}
    </div>
  );
}

export default InputExample;

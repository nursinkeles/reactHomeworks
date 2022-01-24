import User from "./components/User";
import InputExample from "./components/InputExample";
import Counter from "./components/Counter";
import { useState } from "react";

const friends = [
  { id: 1, name: "Ahmet" },
  { id: 2, name: "Mehmet" },
  { id: 3, name: "Ali" },
];

function App() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <User
        name="Mehmet"
        surname="Yılmaz"
        isLoggedIn={true}
        age={20}
        friends={friends}
        address={{ title: "Ataşehir/İstanbul", zip: 34755 }}
      />
      <InputExample />

      {isVisible && <Counter />}
      <br />

      <button onClick={() => setIsVisible(!isVisible)}>Toggle Counter</button>
    </>
  );
}

export default App;

import User from "./components/User";

const friends = [
  { id: 1, name: "Ahmet" },
  { id: 2, name: "Mehmet" },
  { id: 3, name: "Ali" },
];

function App() {
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
    </>
  );
}

export default App;

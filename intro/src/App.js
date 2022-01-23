import "./App.css";
import axios from "axios";
function App() {
  const getUser = (user_id) => {
    return new Promise(async (resolve, reject) => {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/users/" + user_id
      );
      resolve(data);
      reject("Bir sorun oluştu");
    });
  };
  const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
      const { data } = await axios(
        "https://jsonplaceholder.typicode.com/users/" + post_id
      );
      resolve(data);
      reject("Bir sorun oluştu");
    });
  };
  Promise.all([getUser(1), getPost(1)])
    .then(console.log)
    .catch(console.error);

  return <div></div>;
}
export default App;

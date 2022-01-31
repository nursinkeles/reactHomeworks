import "./App.css";
import { useFormik } from "formik";
function App() {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      gender: "",
      hobies: [],
      country: "turkey",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" onChange={handleChange} />
        <br />
        <br />
        {/* initialvalıuesla inputdaki name aynı olmak zorunda özelleştirmeler yapabilmek için input ve form taglerini kulalnabiliyourz */}
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" onChange={handleChange} />
        <br />
        <br />
        <span>Male</span>
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={handleChange}
        />
        <span>Female</span>

        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleChange}
        />

        <br />
        <br />

        <span>Football</span>
        <input
          type="checkbox"
          name="hobies"
          value="Football"
          onChange={handleChange}
        />

        <span>Cinema</span>
        <input
          type="checkbox"
          name="hobies"
          value="Cinema"
          onChange={handleChange}
        />

        <span>Photography</span>
        <input
          type="checkbox"
          name="hobies"
          value="Photography"
          onChange={handleChange}
        />
        <br />
        <br />
        <select name="country" values={values.country} onChange={handleChange}>
          <option value="turkey">Turkey</option>
          <option value="usa">USA</option>
          <option value="england">England</option>
        </select>
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />

        <code>{JSON.stringify(values)}</code>
        {/* initial valueları göstermek istersek inputlara value değeeri olarak vermemiz gerekit
             radiolar için checked={values.gender === "female"} gibi yazmmaız gerekir */}
      </form>
    </div>
  );
}

export default App;

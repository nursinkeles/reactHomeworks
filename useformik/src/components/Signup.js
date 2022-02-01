import { useFormik } from "formik";
import validationSchema from "./Validations";
function Signup() {
  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        // firstName: "",
        // lastName: "",
        email: "",
        // gender: "",
        // hobies: [],
        // country: "turkey",
        password: "",
        passwordConfirm: "",
      },

      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" onChange={handleChange} />
        <br />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" onChange={handleChange} />
        <br />
        <br /> */}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && <div>{errors.email}</div>}
        <br /> <br />
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && <div>{errors.password}</div>}
        <br /> <br />
        <label>ConfirmPassword</label>
        <input
          name="passwordConfirm"
          type="password"
          value={values.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div>{errors.passwordConfirm}</div>
        )}
        {/* <br />
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
        /> */}
        <br />
        <br />
        {/* <span>Football</span>
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
        <br /> */}
        <button type="submit">Submit</button>
        <br />
        <br />
        <code>{JSON.stringify(values)}</code>
      </form>
    </div>
  );
}

export default Signup;

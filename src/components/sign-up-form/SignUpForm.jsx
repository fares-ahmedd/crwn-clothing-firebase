import { useState } from "react";
import {
  createUserWithEmailAndPasswordFunc,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/FormInput";

import "./SignUpForm.styles.scss";
import Button from "../button/Button";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
function SignUpForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  function handleChange(e) {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("password not match");
      return;
    }
    try {
      const { user } = await createUserWithEmailAndPasswordFunc(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.message === "Firebase: Error (auth/email-already-in-use).") {
        alert("Con't create a user , email already in use");
      } else {
        console.log(`user created an error ${error.message}`);
      }
    }
  }
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          id={"name"}
          label={"Name"}
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          id={"email"}
          label={"Email"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          id={"password"}
          label={"Password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          id={"confirmPassword"}
          label={"ConfirmPassword"}
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type={"submit"}>Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;

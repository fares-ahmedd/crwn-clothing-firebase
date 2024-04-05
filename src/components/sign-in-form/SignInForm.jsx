import { useContext, useState } from "react";
import Button from "../button/Button";
import FormInput from "../form-input/FormInput";
import "./SignInForm.styles.scss";
import {
  signInWithEmailAndPasswordFunc,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
const defaultFormFields = {
  signInEmail: "",
  signInPassword: "",
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { signInPassword, signInEmail } = formFields;
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (!signInPassword || !signInEmail) return;
    try {
      const { user } = await signInWithEmailAndPasswordFunc(
        signInEmail,
        signInPassword
      );
      setCurrentUser(user);
      setFormFields(defaultFormFields);
      navigate("/");
    } catch (error) {
      if (error.message === "Firebase: Error (auth/invalid-credential).") {
        alert(`please enter a valid email or password`);
      }
      console.log(error.message);
    }
  }
  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      setCurrentUser(user);
      navigate("/");
    } catch (error) {
      console.log(
        `it seems like the user closed the log in window : ${error.message}`
      );
    }
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          id={"SignEmail"}
          label={"Email"}
          type="email"
          required
          onChange={handleChange}
          name="signInEmail"
          value={signInEmail}
        />
        <FormInput
          id={"SignPassword"}
          label={"Password"}
          type="password"
          required
          onChange={handleChange}
          name="signInPassword"
          value={signInPassword}
        />
        <div className="buttons-group">
          <Button type="submit">SIGN IN</Button>
        </div>
        <span>Or</span>
      </form>
      <Button type={"button"} buttonType={"google"} onClick={signInWithGoogle}>
        SIGN IN WITH GOOGLE
      </Button>
    </div>
  );
}

export default SignInForm;

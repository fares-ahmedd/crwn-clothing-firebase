import SignInForm from "../../components/sign-in-form/SignInForm";
import SignUpForm from "../../components/sign-up-form/SignUpForm";
import "./Authentication.scss";
function Authentication() {
  // ! another way to imploment sign in with google
  // useEffect(() => {
  //   getRedirectResult(auth).then((response) => {
  //     if (response) {
  //       createUserDocumentFromAuth(response.user).then((userDocRef) => {
  //         console.log(userDocRef);
  //       });
  //     }
  //   });
  // }, []);

  return (
    <div className="sign-in-layout">
      {/* <button onClick={signInWithGoogleRedirect}>
        sign in with google Redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default Authentication;

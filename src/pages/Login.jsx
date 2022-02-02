import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";

function Login() {
  return (
    <main className="login">
      <SignUp />
      <SignIn />
    </main>
  );
}

export default Login;

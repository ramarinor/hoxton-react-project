import SignIn from "../components/SignIn/SignIn";
import SignUp from "../components/SignUp/SignUp";

function Login({ setUser }) {
  return (
    <main className="login">
      <SignUp setUser={setUser} />
      <SignIn setUser={setUser} />
    </main>
  );
}

export default Login;

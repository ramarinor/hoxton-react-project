import "./SignIn.css";
import { TextField, Button } from "@mui/material";
function SignIn() {
  return (
    <div className="sign-in">
      <h2>Sign In</h2>
      <form>
        <TextField
          name="email"
          type="email"
          label="EMAIL ADDRESS"
          variant="outlined"
          required
        />
        <TextField
          name="password"
          type="password"
          label="PASSWORD"
          variant="outlined"
          required
        />
        <Button type="submit" variant="contained">
          Sign In
        </Button>
      </form>
    </div>
  );
}

export default SignIn;

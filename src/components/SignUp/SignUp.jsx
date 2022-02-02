import "./SignUp.css";
import { TextField, Button } from "@mui/material";

function SignUp() {
  return (
    <div className="sign-up">
      <h2>Sign Up</h2>
      <form>
        <TextField
          name="firstName"
          type="text"
          label="FIRST NAME"
          variant="outlined"
          required
        />
        <TextField
          name="lastName"
          type="text"
          label="LAST NAME"
          variant="outlined"
          required
        />
        <TextField
          name="address"
          type="text"
          label="ADDRESS"
          variant="outlined"
          required
        />
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
        <TextField
          name="confrim"
          type="password"
          label="CONFRIM PASSWORD"
          variant="outlined"
          required
        />
        <Button type="submit" variant="contained">
          Sign Up
        </Button>
      </form>
    </div>
  );
}

export default SignUp;

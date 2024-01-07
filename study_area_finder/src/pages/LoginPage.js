import "./styles/LoginPage.css";
import SignIn from "../components/auth/SignIn.jsx";

function LoginPage() {
  return (
    <>
      <div className="App">
        <SignIn />
      </div>
      <a href="/create_account">Make an account</a>
    </>
  );
}

export default LoginPage;

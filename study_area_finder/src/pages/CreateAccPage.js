import SignUp from "../components/auth/SignUp.jsx";

function CreateAccountPage() {
  return (
    <>
      <div className="Create-Account">
        <SignUp />
      </div>
      <a href="/">Already have an account?</a>
    </>
  );
}

export default CreateAccountPage;

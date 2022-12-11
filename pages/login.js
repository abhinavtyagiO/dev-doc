import { auth, googleAuthProvider } from "../lib/firebase";
import { useContext } from "react";
import { UserContext } from "../lib/context";

const Signin = () => {
  const signinWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };
  return (
    <button className="btn-google" onClick={signinWithGoogle}>
      Sign In with Google
    </button>
  );
};

const Signout = () => {
  return <button onClick={() => auth.signOut()}>Sign Out</button>;
};

const UsernameForm = () => {
  return <></>;
};

const Login = () => {
  const { user, username } = useContext(UserContext);
  return (
    <main>
      {user ? !username ? <UsernameForm /> : <Signout /> : <Signin />}
    </main>
  );
};

export default Login;

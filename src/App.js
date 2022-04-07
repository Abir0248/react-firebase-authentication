import "./App.css";
import app from "./firebase.init";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const handleGoogleSignIn = () => {
    // console.log("working");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  };
  const handleGithubSignIn = () => {
    // console.log("gittu");
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.error("error:", error);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        setUser({});
      });
  };

  return (
    <div className="App">
      {user.uid ? (
        <button onClick={handleSignOut} className="g-btn">
          Sign Out
        </button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn} className="g-btn">
            Google Sign In
          </button>
          <button onClick={handleGithubSignIn} className="g-btn">
            Github Sign In
          </button>
        </>
      )}

      <h2>Name: {user.displayName}</h2>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;

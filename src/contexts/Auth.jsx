import firebase from "../lib/firebase";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleUser = (rawUser) => {
    if (!rawUser) {
      setUser(null);
      return null;
    }

    const formattedUser = formatUser(rawUser);
    setUser(formattedUser);
    return formattedUser;
  };

  const signinWithGithub = () =>
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((resp) => handleUser(resp.user));

  const signinWithGoogle = () =>
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((resp) => handleUser(resp.user));

  const signupWithEmailAndPassword = (email, password) =>
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((resp) => handleUser(resp.user));

  const signinWithEmailAndPassword = (email, password) =>
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((resp) => handleUser(resp.user));

  const signout = () =>
    firebase
      .auth()
      .signOut()
      .then(() => setUser(null));

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);
    return () => unsubscribe();
  }, []);

  const values = {
    signinWithGithub,
    signinWithGoogle,
    signupWithEmailAndPassword,
    signinWithEmailAndPassword,
    signout,
    user,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const formatUser = (rawUser) => ({
  uid: rawUser.uid,
  email: rawUser.email,
  name: rawUser.displayName,
  photoUrl: rawUser.photoURL,
  provider: rawUser.providerData[0].providerId,
});

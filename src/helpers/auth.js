import { auth } from "../services/firebase.js";

/**setting up firebase auth signup, signin */
export function signUp(email, password) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function signIn(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

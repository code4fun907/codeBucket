import firebase from "./firebase";

const firestore = firebase.firestore();

const createUser = (uid, data) =>
  firestore
    .collection("users")
    .doc(uid)
    .set({ uid, ...data }, { merge: true });

const createQuestion = (title, body, tags, userId) =>
  firestore
    .collection("questions")
    .add({ title, body, tags, userId, comments: [], likes: 0, comments: 0 });

export default {
  createUser,
  createQuestion,
};

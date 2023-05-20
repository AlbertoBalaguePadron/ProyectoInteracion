import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJY3Thg20Kw6DKCnPThbZLeFkPk_x6BzM",
  authDomain: "proyectointegracion-c4fab.firebaseapp.com",
  databaseURL:
    "https://proyectointegracion-c4fab-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "proyectointegracion-c4fab",
  storageBucket: "proyectointegracion-c4fab.appspot.com",
  messagingSenderId: "288884124265",
  appId: "1:288884124265:web:5fd2fd6585e243cb5990f8",
  measurementId: "G-10TPYNFML4",
};
export const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

// guardar archivos en Storage
export const storage = getStorage(app);

export async function uploadFile(file, nombreArchivo) {
  const storageRef = ref(storage, nombreArchivo);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}

export async function getList() {
  const result = await db.collection("Filtros").get();
  return result;
  // const list = await app.firestore().collection("Filtros").get();
  // console.log(list);
  // return list;
}

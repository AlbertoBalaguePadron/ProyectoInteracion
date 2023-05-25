import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBJY3Thg20Kw6DKCnPThbZLeFkPk_x6BzM",
  authDomain: "proyectointegracion-c4fab.firebaseapp.com",
  databaseURL: "https://proyectointegracion-c4fab-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "proyectointegracion-c4fab",
  storageBucket: "proyectointegracion-c4fab.appspot.com",
  messagingSenderId: "288884124265",
  appId: "1:288884124265:web:5fd2fd6585e243cb5990f8",
  measurementId: "G-10TPYNFML4",
};

export const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();


const auth = getAuth(app);
const firebaseApp = firebase.initializeApp(firebaseConfig);

export { auth, signInWithEmailAndPassword, db, firebaseApp };


// guardar archivos en Storage
export const storage = getStorage(app);

export async function uploadFile(file, rutaArchivo) {
  const storageRef = ref(storage, rutaArchivo);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
}

/*Recoger datos de Firestore*/
export async function getList() {
  const result = await db.collection("Filtros").get();
  return result;
}

export async function getListByID(id) {
  const docRef = doc(getFirestore(), "TablaURLS", id);
  const docSnapshot = await getDoc(docRef);
  const data = {
    id: docSnapshot.id,
    Url: docSnapshot.data().Url,
    url: docSnapshot.data().url,
    nombre: docSnapshot.data().nombre,
    filtros: docSnapshot.data().filtros,
  };
  return data;
}

export async function getAllList(link) {
  const queryCollection = collection(getFirestore(), "TablaURLS");
  const queryFilter = query(queryCollection, where("Url", "==", link));
  const querySnapshot = await getDocs(queryFilter);

  const result = querySnapshot.docs.map((target) => ({
    id: target.id,
    Url: target.data().Url,
    url: target.data().url,
    nombre: target.data().nombre,
    filtros: target.data().filtros,
  }));


  return result;
}

export async function dropDataMaterial(id, rutaArhivo, nombreArchivo) {
  await db.collection("TablaURLS").doc(id).delete();
  const desertRef = ref(storage, rutaArhivo + nombreArchivo);
  deleteObject(desertRef)
    .then(() => {})
    .catch((error) => {});
  return true;
}

export async function editDataBase(file, data, newData) {


console.log(data);
  const rutaEliminar = data.Url + data.nombre;
  const refDrop = ref(storage, rutaEliminar);

  await deleteObject(refDrop)
    .then((response) => {})
    .catch((error) => {});
    
    const url = await uploadFile(file, newData.Url + newData.nombre)

    newData.url = url; 
    await db.collection("TablaURLS").doc(data.id).update(newData)

    window.location.reload(); 
}

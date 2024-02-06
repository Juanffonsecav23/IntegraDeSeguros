// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {addDoc, collection, getDocs, getFirestore, query, where , doc , getDoc, orderBy} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7myzi8Ljpmuo7DNZwbXlNxEHSQFMOY70",
  authDomain: "integraldeseguros-a0736.firebaseapp.com",
  projectId: "integraldeseguros-a0736",
  storageBucket: "integraldeseguros-a0736.appspot.com",
  messagingSenderId: "368758344851",
  appId: "1:368758344851:web:920a6aa8a0b4918797d166"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);

//Funcion para ordenar los items

function ordenar(a,b) {
  const titleA = a.title.toUpperCase();
  const titleB = b.title.toUpperCase();
  if (titleA < titleB) {
    return -1;
  }
  if (titleA > titleB) {
    return 1;
  }
  return 0;
}

// Funcion para los datos de los seguros

export async function getSegurosData() {
  const segurosCollectiosRef = collection(db ,"Seguros");
  const q = query(segurosCollectiosRef);
  const segurosSnapshot = await getDocs(q);
  const arrayDocs = segurosSnapshot.docs;
  const dataDocs = arrayDocs.map(doc =>{
    return {...doc.data(), id: doc.id }
  });

  dataDocs.sort(ordenar);

  return dataDocs;
}


//Funcion para los datos de los seguros individuales

export async function getSeguroData(idURL){
  const docRef = doc(db, "Seguros", idURL);
  const docSnap = await getDoc(docRef);
  return {id: docSnap.id , ...docSnap.data()}
}

// Funcion para los datos de los seguro filtrado

export async function segurosDataFiltrado(categoryId){
  const segurosCollectiosRef = collection(db ,"Seguros");
  const q = query(segurosCollectiosRef , where("category" , "==", categoryId));
  const segurosSnapshot = await getDocs(q);
  const arrayDocs = segurosSnapshot.docs;
  const dataDocs = arrayDocs.map(doc =>{
    return {...doc.data(), id: doc.id }
  });

  dataDocs.sort(ordenar);

  return dataDocs;
}


// Funcion para los datos de las aseguradoras

export async function getAseguradorasData() {
  const segurosCollectiosRef = collection(db ,"Aseguradoras");
  const q = query(segurosCollectiosRef);
  const segurosSnapshot = await getDocs(q);
  const arrayDocs = segurosSnapshot.docs;
  const dataDocs = arrayDocs.map(doc =>{
    return {...doc.data(), id: doc.id }
  });
  return dataDocs;
}

// Funcion para enviar los datos del formulario

export async function formData(data){
  const formCollectionRef = collection(db , "Solicitudes");
  const response = await addDoc(formCollectionRef, data) ;
  return response.id;
}

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, getDoc,  } from "firebase/firestore/lite"


const firebaseConfig = {
  apiKey: "AIzaSyAZf7Y6xSs_RN2PUZXK09otWxyNgxgTyIs",
  authDomain: "vanlife-32d50.firebaseapp.com",
  projectId: "vanlife-32d50",
  storageBucket: "vanlife-32d50.appspot.com",
  messagingSenderId: "702039823106",
  appId: "1:702039823106:web:c1b840da84ec928748281b",
  measurementId: "G-9TKBMQEQ5H"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")
const userCollectionRef = collection(db, "users")

export const getVans = async() => {

  const querySnapShot = await getDocs(vansCollectionRef);
  const dataArr = querySnapShot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return dataArr
}


export const getVanDetail = async(id) => {
  const docRef = doc(db, "vans", id)

  const vanSnapshot = await getDoc(docRef);
  const data = {...vanSnapshot.data(), id: vanSnapshot.id}
  return data
}


export const getAdminVans = async() => {

}



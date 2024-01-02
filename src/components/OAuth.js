import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";



export default function OAuth() {
  const navigate = useNavigate();

 async function onGoogleClick(){
    try {
      const auth= getAuth();
      const provider= new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user= result.user;

      // check if user exists or not and if not add to db: 

      const docRef= doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
  
      if(!docSnap.exists()){
        await setDoc(docRef,{
          name:user.displayName,
          email:user.email,
          timestamp: serverTimestamp(),
        })
      }
         navigate("/");

    } catch (error) {
      toast.error("Could not authorize with Google!")
    
  }
}
  return (
    <button onClick={onGoogleClick}
      type="button"
      className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-3  text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg  rounded"
    >
      Sign in with Google
    </button>
  );
}

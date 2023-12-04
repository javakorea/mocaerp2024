import { GoogleAuthProvider } from 'firebase/auth';
const credential = GoogleAuthProvider.credential(idToken);
import {
    getAuth,
    signInWithCredential
} from 'firebase/auth';
const auth = getAuth();
signInWithCredential(auth, credential).then(result => {
}).catch(error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
});
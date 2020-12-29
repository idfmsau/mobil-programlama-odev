
import * as firebase from 'firebase';
import firebaseErrors from '../FirebaseErrorLocalization'
function createUser(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(
        ({code, message}) => {
            throw firebaseErrors[code] || message;
        }
    )
}

export default createUser;
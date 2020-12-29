
import * as firebase from 'firebase';
import firebaseErrors from '../FirebaseErrorLocalization'
function userSignIn(email, password, setterFunction) {
    return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        setterFunction(user);
      })
      .catch(({code, message}) => {
        throw firebaseErrors[code] || code;
      });
  }

export default userSignIn;
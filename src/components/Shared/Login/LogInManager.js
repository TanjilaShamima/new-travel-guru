import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase-config';

export const firebaseInitializedApp = () =>{
    if(firebase.apps.length === 0)   
        firebase.initializeApp(firebaseConfig);
       
}

export const handleGoogleSignIn = () =>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    // console.log("Clicked");
    return firebase.auth().signInWithPopup(googleProvider)
    .then(result =>{
      const {displayName, email, photoURL} = result.user;
      const signInUser = {
        isSigningIn : true,
        name : displayName,
        email : email,
        photo : photoURL,
        success : true       
      }
      return signInUser;

      // console.log(displayName, email, photoURL);
    })
    .catch(error => {
      const {code, message, email, credential} = error
      // var errorCode = error.code;
      // var errorMessage = error.message;  
      // var email = error.email; 
      // var credential = error.credential;

      console.log(code, message, email, credential);
    })
  }


  export const handleSignOutfromUser = () =>{
    return firebase.auth().signOut()
    .then(result =>{
      const signedOut = {
        isSigningIn : false,
        email : '',
        name : '',
        photo : '',
        success : false
        

      }
      return signedOut;
    })

  }

  export const handleFbSignIn = () =>{
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider).then(function(result) {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      user.success = true;
      return user;

      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  export const createUserWithEmailAndPassword = (name, email, password) =>{
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(result => {
      const newUserDetails = result.user;
      newUserDetails.success = true;
      newUserDetails.error = '';
      updateUserName(name);
      return newUserDetails;
    })
    .catch( error => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
      // Handle Errors here.
      // var errorCode = error.code;
      // var errorMessage = 
      // console.log(errorCode, errorMessage);

      // ...
    });
  }

  export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res =>{
      const newUserDetails = res.user;
      newUserDetails.success = true;
      newUserDetails.error = '';
      return newUserDetails;
    })
    .catch(error => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
  }

  const updateUserName = name => {
    var user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: "Jane Q. User",
      photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(function() {
      console.log("User updated successfully")
    }).catch(function(error) {
      console.log(error);
    });
  }
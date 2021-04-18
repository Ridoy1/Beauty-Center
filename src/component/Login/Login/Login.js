import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    let history = useHistory();
    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {

        if(firebase.apps.length === 0){
            firebase.initializeApp(firebaseConfig);
        }

        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                
                const {displayName, email} = result.user;
                const signedInUser = {name: displayName, email};
                setLoggedInUser(signedInUser);
                history.replace(from);
                // ...
            }).catch((error) => {
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
    return (
        <div className="d-flex justify-content-center align-items-center m-5 p-5">
            <button className="p-2 rounded-pill" onClick={handleGoogleSignIn}>Google Sign in</button>
        </div>
    );
};

export default Login;
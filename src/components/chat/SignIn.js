import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth } from '../../Firebase.js'
import "../../index.css"


 
function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center',}} className="background">
          
            <button type="button" className="btn btn-primary btn-lg zoom" style={{ padding: '30px', fontSize: '20px', borderRadius: '3', fontWeight: '600'   }} onClick={signInWithGoogle}>Sign In With Google</button>
        </div>
    )
} 


export default SignIn

// onClick={signInWithGoogle}
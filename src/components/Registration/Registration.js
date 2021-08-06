import React, { useState } from 'react';
import './Registration.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import googleIcon from '../../img/icon/google.png'
// import Popup from "reactjs-popup"

firebase.initializeApp(firebaseConfig)

const Registration = () => {
    const [user, setUser] = useState({
        googleSignIn: false,
        fbSignIn: false,
        name: '',
        email: '',
        photo: ''
    })
    const GoogleProvider = new firebase.auth.GoogleAuthProvider();

    const handleSignInGoogle = () => {
        firebase.auth().signInWithPopup(GoogleProvider)
        .then(result =>{
            const {displayName, photoURL, email} = result.user;
            // console.log(result.user);
            const signInUserGoogle = {
                googleSignIn: true,
                fbSignIn: false,
                name: displayName,
                email: email,
                photo: photoURL
            }
            setUser(signInUserGoogle);
        })
        .catch(err =>{
            console.log(err);
            console.log(err.message);
        })
    }
    const handleSignOutGoogle = () => {
        firebase.auth().signOut()
        .then(res =>{
            const signOutUserGoogle = {
                googleSignIn: false,
                fbSignIn: false,
                name: '',
                email: '',
                photo: ''
            }
            setUser(signOutUserGoogle);
        })
        // .catch(err =>{})
    }

 
    // const provider = new firebase.auth.FacebookAuthProvider();

    // const handleSignInFb = () =>{
    //     firebase.auth().signInWithPopup(provider)
    //     .then(res =>{
    //         const fbPicture = res.additionalUserInfo.profile.picture.data.url;
    //         const {name, email} = res.additionalUserInfo.profile
    //         const fbSignIn = {
    //             googleSignIn: false,
    //             fbSignIn: true,
    //             name: name,
    //             email: email,
    //             photo: fbPicture
    //         }
    //         setUser(fbSignIn);
    //     })
    //     .catch(err =>{
    //         console.log(err);
    //         console.log(err.message);
    //     })
    // }
    // const handleSignOutFb = () =>{
    //     firebase.auth().signOut()
    //     .then(res =>{
    //         const signOutUserFb = {
    //             googleSignIn: false,
    //             fbSignIn: false,
    //             name: '',
    //             email: '',
    //             photo: ''
    //        }
    //        setUser(signOutUserFb);
    //     })
    //     // .catch(err =>{})
    // }

    return (
        <div style={{margin: '100px 0px', textAlign: 'center'}}>
            <div className="container">
                {
                    user.googleSignIn  ? <button onClick={handleSignOutGoogle} id="googleIcon" class="d-flex align-items-center justify-content-center" style={{margin: '0 auto'}}>
                        <img src={googleIcon} alt="google icon"/><span style={{color: 'red'}}>Sign Out From Google</span>
                    </button> :
                    <button onClick={handleSignInGoogle} id="googleIcon" class="d-flex align-items-center justify-content-center"  style={{margin: '0 auto'}}>
                        {/* <div id="googleIcon" > */}
                            {/* <p id="googleIcon" class="d-flex align-items-center justify-content-center"> */}
                                <img src={googleIcon} alt="google icon"/><span>Sign In With Google</span>
                            {/* </p> */}
                        {/* </div> */}
                    </button>
                }
                {/* {
                    user.fbSignIn ? <button onClick ={handleSignOutFb}>Sign Out Fb</button> :<button onClick ={handleSignInFb}>Signing With Fb</button>
                } */}
            </div>
            
            <div >
                {
                    user.googleSignIn && <div>
                    <p>Welcome, {user.name}</p>
                    <p>your email: {user.email}</p>
                    <img src={user.photo} alt=""/>
                </div> 
                }
                {/* {
                    user.fbSignIn && <div>
                        <p>Welcome, {user.name}</p>
                        <p>your email: {user.email}</p>
                        <img src={user.photo} alt=""/>
                    </div>
                } */}
                
            </div>


        </div>
    );
}

export default Registration;

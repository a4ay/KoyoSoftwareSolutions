
import React, { useState } from 'react';
import './SignInGoogle.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../../firebase.config';


firebase.initializeApp(firebaseConfig)

const SignInGoogle = () => {
   

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
                    const signOutUsergoogle = {
                        googleSignIn: false,
                        fbSignIn: false,
                        name: '',
                        email: '',
                        photo: ''
                    }
                    setUser(signOutUsergoogle);
                })
                .catch(err =>{
                   
                })
            }

          
            const provider = new firebase.auth.FacebookAuthProvider();

            const handleSignInFb = () =>{
                firebase.auth().signInWithPopup(provider)
                .then(res =>{
                    const fbPicture = res.additionalUserInfo.profile.picture.data.url;
                    const {name, email} = res.additionalUserInfo.profile
                    const fbSignIn = {
                        googleSignIn: false,
                        fbSignIn: true,
                        name: name,
                        email: email,
                        photo: fbPicture
                    }
                    setUser(fbSignIn);
                })
                .catch(err =>{
                       console.log(err);
                       console.log(err.message);
                })
            }
            const handleSignOutFb = () =>{
                firebase.auth().signOut()
                .then(res =>{
                    const signOutUserFb = {
                        googleSignIn: false,
                        fbSignIn: false,
                        name: '',
                        email: '',
                        photo: ''
                    }
                    setUser(signOutUserFb);
                })
                .catch(err =>{

                })
            }


    return (
        <div>
             <div className= "naveBer">
                {
                    user.googleSignIn  ? <button onClick={handleSignOutGoogle} >Sign out google</button> :
                    <button onClick={handleSignInGoogle} >Sign In google</button>
                }
                {
                    user.fbSignIn ? <button onClick ={handleSignOutFb}>Sign Out Fb</button> :<button onClick ={handleSignInFb}>Sign In Fb</button>
                }
            </div>
            
            <div className="owner">
                {
                    user.googleSignIn && <div>
                    <p>Welecome, {user.name}</p>
                    <p>your email: {user.email}</p>
                    <img src={user.photo} alt=""/>
                </div> 
                }
                {
                    user.fbSignIn && <div>
                        <p>Welecome, {user.name}</p>
                        <p>your email: {user.email}</p>
                        <img src={user.photo} alt=""/>
                    </div>
                }
                
            </div>
            
            
            
        </div>
    );
};

export default SignInGoogle;



            
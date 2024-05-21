import { createContext, useEffect, useState } from "react";
import fireAuth from "../Firebase/FireApp";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { Bounce, Flip, Slide, ToastContainer, toast } from "react-toastify";

export const InfoProvider = createContext(null);

export default function Context({children}){
    const [load,setLoad] = useState(false);
    const [user,setUser] = useState();
    const [darkTheme,setDarkTheme] = useState(true);

    const registration=(value)=>{
        setLoad(true);
        createUserWithEmailAndPassword(fireAuth,value.email,value.pass)
        .then((data)=>{
            updateProfile(fireAuth.currentUser,{
                displayName: value.name,
                photoURL: value.photo
            })
            .then(()=>{
                setLoad(true)
                setUser(data.user)
            })
        })
        .catch(()=>{
            setLoad(true);
        })
    }

    const loginUser=(value)=>{
        signInWithEmailAndPassword(fireAuth,value.email,value.pass)
        .then((data)=>{
            setUser(data.user);
            setLoad(true);
            toast.success('Successfully log in', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition:Bounce,
                });
        }).catch(()=>{
            toast.error('Email or Password mismatch', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Flip,
                });
        })
    }
    const logoutUser=()=>{
        signOut(fireAuth)
        .then(()=>{
            setUser(null)
            setLoad(true)
        })
    }

    const googleLogin=()=>{
        const provider = new GoogleAuthProvider;

        signInWithPopup(fireAuth,provider)
        .then((data)=>{
            setLoad(true)
            setUser(data.user)
            toast.success('Successfully log in', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition:Bounce,
                });
        })
    }

    const changeTheme=(value)=>{
        setDarkTheme(value);
    }

    useEffect(()=>{
        const unmount = onAuthStateChanged(fireAuth,(data)=>{
            setUser(data);
            setLoad(false)
        });

        return ()=>{
            unmount()
        }
    },[user,user?.photoURL])

    const info = {registration,loginUser,logoutUser,googleLogin,changeTheme,user,load,darkTheme};

    return(
        <>
        <ToastContainer/>
            <InfoProvider.Provider value={info}>
                {children}
            </InfoProvider.Provider>
        </>
    )
}
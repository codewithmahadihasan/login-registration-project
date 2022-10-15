import React, { useState } from "react";
import groovyWalkAnimation from "../Image/image.json";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import app from "../Firebase/firebase.init";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

const Registar = () => {
  const [error, setError] = useState();
  const [pass, setPass] = useState();
  const [email, setEmail] = useState();
  const auth = getAuth(app);
  const handelToClick = (even) => {
    even.preventDefault();
    const target = even.target;
    // const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;
    // if (email.toLowerCase() === email) {
    //   setEmail("");
    //   return;
    // } else {
    //   setEmail("sorry It is not a valid Email");
    //   // return;
    // }

    if (!/(?=[A-Z])/.test(password)) {
      setPass("Sorry You do not add a uper case");
      return;
    }
    if (!/(?=.*[!@#$&*])/.test(password)) {
      setPass("Soory You do not use a spachal carectar");
      return;
    } else {
      setPass("");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        Swal.fire({
          icon: "success",
          title: "Wow",
          text: "You Are Now vaild User ",
          footer: '<a href="">Please verification your email address</a>',
        });
        sendEmailVerification(auth.currentUser).then(() => {
          // Email verification sent!
          // ...
        });

        console.log(user);
        setError("");
        target.reset();
        // ...
      })
      .catch((error) => {
        setError(error.message);
        target.reset();
        return;

        // ..
      });
  };

  return (
    <div className="bg-gray-900 pb-28 px-6">
      <div className="grid  max-w-screen-xl grid-cols-1 md:gap-36 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-900 text-gray-100 md:items-center ">
        <div>
          <div className="space-y-2"></div>

          <Lottie animationData={groovyWalkAnimation} loop={true}></Lottie>
        </div>
        <form
          onSubmit={handelToClick}
          className="space-y-6 ng-untouched ng-pristine ng-valid"
        >
          <Link to="/login" className="hover:underline text-gray-500">
            Do you have an acount ?
          </Link>
          <div>
            <h2 className="text-sm text-red-500"> {error}</h2>
          </div>
          <div>
            <label className="text-sm">Full name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder=""
              className="w-full p-3 rounded text-black "
            />
          </div>

          <div>
            <label className="text-sm">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full p-3 rounded text-black "
            />
          </div>
          <div>
            <h2 className="text-sm text-red-500"> {email}</h2>
          </div>
          <div>
            <label className="text-sm">Passward</label>
            <input
              id="password"
              type="password"
              name="password"
              className="w-full p-3 rounded text-black "
            />
          </div>
          <div>
            <h2 className="text-sm text-red-500"> {pass}</h2>
          </div>

          <button
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-400 text-gray-900"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registar;

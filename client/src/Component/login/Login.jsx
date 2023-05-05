import React, { useEffect, useState } from "react";
import Inputbox from "./Inputbox";
import { motion } from "framer-motion";
import { buttonclick } from "../../Animation";
import { FcGoogle } from "react-icons/fc";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../../config/firebase.config";
import { validatuser } from "../../api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setuser } from "../../redux-toolkit/reducer/reducer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [useremail, setuseremail] = useState("");
  const [isSign, setisSign] = useState(false);
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user.user) {
      Navigate("/", { replace: true });
    }
  }, [user.user]);

  const loginwithgoogle = async () => {
    await signInWithPopup(firebaseAuth, provider).then((userCRED) => {
      firebaseAuth.onAuthStateChanged((cred) => {
        if (cred) {
          cred.getIdToken().then((token) => {
            // console.log(token);
            validatuser(token).then((data) => {
              console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnn",data);
              dispatch(setuser(data));
              console.log("ooooooooooooooooooooooo",dispatch(setuser(data)))
            });
            Navigate("/", { replace: true });
          });
        }
      });
    });
  };
  const signupbutton = async () => {
    if (useremail === "") {
      toast.error("email is required!", {
        position: "top-center",
      });
    } else if (!useremail.includes("@")) {
      toast.warning("includes @ in your email!", {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error("password is required!", {
        position: "top-center",
      });
    } else if (password.length < 6) {
      toast.error("password must be 6 char!", {
        position: "top-center",
      });
    } else {
      try {
        if (password === cpassword) {
          setuseremail("");
          setpassword("");
          setcpassword("");
          await createUserWithEmailAndPassword(
            firebaseAuth,
            useremail,
            password
          ).then((userCRED) => {
            firebaseAuth.onAuthStateChanged((cred) => {
              if (cred) {
                cred.getIdToken().then((token) => {
                  // console.log(token);
                  validatuser(token).then((data) => {
                    // console.log(".............",data);
                    dispatch(setuser(data));
                  });
                  Navigate("/", { replace: true });
                  toast.success("Welcome to PRINCE.COM");
                });
              }
            });
          });
        }
      } catch (error) {
        console.log("--sign up error", error);
      }
    }
  };
  const signintofirebase = async () => {
    if (useremail !== "" && password !== "") {
      try {
        signInWithEmailAndPassword(firebaseAuth, useremail, password).then(
          (userCRED) => {
            firebaseAuth.onAuthStateChanged((cred) => {
              if (cred) {
                cred.getIdToken().then((token) => {
                  // console.log(token);
                  validatuser(token).then((data) => {
                    // console.log(data);
                    dispatch(setuser(data));
                  });
                  Navigate("/", { replace: true });
                  toast.success("Welcome to PRINCE.COM");
                });
              }
            });
          }
        );
      } catch (error) {
        console.log("--Sign in error", error);
      }
    } else {
      if (useremail === "") {
        toast.error("email is required!", {
          position: "top-center",
        });
      } else if (!useremail.includes("@")) {
        toast.warning("includes @ in your email!", {
          position: "top-center",
        });
      } else if (password === "") {
        toast.error("password is required!", {
          position: "top-center",
        });
      } else if (password.length < 6) {
        toast.error("password must be 6 char!", {
          position: "top-center",
        });
      } else if (cpassword === "") {
        toast.error("confirm password is required");
      }
    }
  };

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="md:w-[500px] h-auto min-h-[520px] bg-white shadow-2xl">
          <div className="text-center my-8">
            <h1 className="font-serif text-2xl">Welcome Back</h1>
            <p>{isSign ? "Sign-up" : "Sign-in"} with following</p>
          </div>
          <div className="flex flex-col gap-4">
            <Inputbox
              placeholder={"enter your email"}
              inputstate={useremail}
              inputstatefun={setuseremail}
              type="email"
              isSign={isSign}
            />
            <Inputbox
              placeholder={"Enter your password"}
              inputstate={password}
              inputstatefun={setpassword}
              type="password"
              isSign={isSign}
            />
            {isSign && (
              <Inputbox
                placeholder={"Enter your confirm password"}
                inputstate={cpassword}
                inputstatefun={setcpassword}
                type="password"
                isSign={isSign}
              />
            )}

            {!isSign ? (
              <h3 className="text-center">
                Doesn't have an account:{" "}
                <motion.button {...buttonclick} onClick={() => setisSign(true)}>
                  <p className="cursor-pointer hover:text-red-400 hover:underline">
                    Create one
                  </p>
                </motion.button>
              </h3>
            ) : (
              <h3 className="text-center">
                Already have an account:
                <motion.button
                  {...buttonclick}
                  onClick={() => setisSign(false)}
                >
                  <p className="hover:text-blue-400 hover:underline">
                    Create one
                  </p>
                </motion.button>
              </h3>
            )}
            {isSign ? (
              <motion.button
                {...buttonclick}
                className="rounded-md bg-[#2F3B3B] hover:bg-[#3B2F2F] text-white md:mx-8 px-4 py-2"
                onClick={signupbutton}
              >
                Sign up
              </motion.button>
            ) : (
              <motion.button
                {...buttonclick}
                onClick={signintofirebase}
                className="rounded-md bg-[#2F3B3B] hover:bg-[#3B2F2F] text-white md:mx-8 px-4 py-2"
              >
                Sign in
              </motion.button>
            )}
            <div className="flex items-center justify-between gap-16 md:mx-8 px-4 py-2">
              <div className="w-52 h-[1px] rounded-md bg-black"></div>
              <p className="text-black">or</p>
              <div className="w-52 h-[1px] rounded-md bg-black"></div>
            </div>

            <motion.button
              {...buttonclick}
              className="rounded-md bg-[#EAF1F1] md:mx-8 px-4 py-2 flex justify-center items-center gap-2"
              onClick={loginwithgoogle}
            >
              <FcGoogle className="text-2xl" />
              <h2 className="capitalize">SignIn with Google</h2>
            </motion.button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;

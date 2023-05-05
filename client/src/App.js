import { Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./Component/login/Login";
import { app } from "./config/firebase.config";
// import Header from "./Component/Header/Header";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAuth } from "firebase/auth";
import { validatuser } from "./api";
import { setuser } from "./redux-toolkit/reducer/reducer";
import { motion } from "framer-motion";
import { fadeinandout } from "./Animation";
import "./App.css";
import Dashbord from "./Component/Dashbord/Dashbord";
import Firstheader from "./Component/FirstHeader/Firstheader";
import Pro from "./Component/SectionShopping/Pro";
import Cart from "./Component/SectionShopping/Cart";

function App() {
  const firebaseAuth = getAuth(app);
  // const users = useSelector((state) => state.users);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);
    firebaseAuth.onAuthStateChanged((cred) => {
      if (cred) {
        cred.getIdToken().then((token) => {
          // console.log(token);
          validatuser(token).then((data) => {
            dispatch(setuser(data));
            console.log(setuser(data));
          });
        });
      }
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
  }, []);

  return (
    <>
      {/* <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center"> */}

      {isLoading && (
        <motion.div
          {...fadeinandout}
          className="fixed z-50 inset-0 backdrop-blur-sm flex items-center justify-center w-full"
        >
          <div className="preloader">
            <div className="circle"></div>
          </div>
        </motion.div>
      )}
      {/* <Header /> */}

      
      <Routes>
        <Route path="/*" element={<Firstheader />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Pro />} />
        <Route path="/Cart" element={<Cart />} />
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/Dash/*" element={<Dashbord />} />
      </Routes>
    </>
  );
}

export default App;

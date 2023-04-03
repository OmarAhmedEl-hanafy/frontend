import React from 'react';
import icon from "../image/icon.png";
import "./Navbar.css";
//import "./main.css";
import {useNavigate} from "react-router-dom";
import { useState,useEffect } from 'react';

export default function Navbar() {
const [windowScroll, setWindowScroll] = useState(0);

// const reload = () => {
//     window.location.reload(true);
//   };

// -----------------------
const [userLogin, setUserLogin] = useState("");
useEffect(() => {

    const userData = JSON.parse(localStorage.getItem("data")) || [];
    userData.forEach((user) => {
      setUserLogin(user.name);
    });

    const handleScroll = () => {
        setWindowScroll(window.scrollY);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  });
  const Navigate = useNavigate();
  const tohome = () => {
    Navigate("/");
  }
  const to_sign_in = () => {
    Navigate("/login");
  }
  const to_sign_up = () => {
    Navigate("/signup");
  }
  const handleogout = () => {
    localStorage.clear("data");
    Navigate("/");
  };

    return (
        <>
            <>
                {windowScroll > 100 && (<div className="to-up position-fixed end-0 bottom-0 m-5 fa-2x"  onClick={() => window.scrollTo(0, 0)}>
                            <i className=" fas fa-arrow-alt-circle-up"></i>
                </div>)}
                <nav className="navbar navbar-expand-lg navbar-dark" style={{ top: windowScroll > 100 ? 0 : 50, width: windowScroll > 100 ? '100%' : '70%' }}>
                    <div className="container">
                        <a className="navbar-brand fa-2xl" href="#home"><img style={{width: "3rem"}} src={icon} alt=""/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse fs-5" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" onClick={tohome}  href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#category">Categories</a>
                                </li>
                                {userLogin&&
                                <>
                                    <li className="nav-item">
                                        <a className="nav-link" href="movies">Movies</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="community">Community</a>
                                    </li>
                                </>
                                }
                            </ul>
                            {/* <span className="fw-bold mx-4" id="login"></span> */}
                            {userLogin ?(
                            <>
                                <a href='#' className="nav-link"><div className="btn btn-usr btn-sm border-0 fw-bold fs-5" >Hi {userLogin}</div></a>
                                <a href="/" className="nav-link"><div className="btn btn-outline-warning btn-sm border-0 fs-5" id="logOutBtn"onClick={handleogout}>LogOut</div></a></> )
                            :(<>
                                <a href="/login" className="nav-link"><div className="btn btn-usr btn-sm border-0 fs-5" id="logOutBtn"onClick={to_sign_in}>Sign in</div></a>
                                <a href='/signup' className="nav-link"><div className="btn btn-usr btn-sm border-0 fs-5" id="logOutBtn"onClick={to_sign_up}>Sign up</div></a></>)
                            }
                            
                        </div>
                    </div>
                </nav>
                </>
        </>
    )
}

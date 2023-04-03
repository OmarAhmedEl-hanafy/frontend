import React from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import icon from "../image/icon.png";
import swal from "sweetalert";
import { useState } from "react";
// import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (validationName() && validationEmail()) {
          if (data.success) {
            const userData = {
              id: data.user_id,
              name,
              email,
              password,
            };
            let users = JSON.parse(localStorage.getItem("data")) || [];
            users.push(userData);
            localStorage.setItem("data", JSON.stringify(users));
            // localStorage.setItem("userid", data.user_id); // Store user ID in local storage
            setError("");
            // Login successful, redirect to home page
            window.location.href = "/";
          } else {
            // Login failed, show error message here
            console.log(data);
            setError("Failed to login. Please check your username and password.");
          }
        }
      })
      .catch((error) => {
        // Handle any errors here
        setError("An error occurred while trying to login.");
      });
  };  


  // const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     fetch('http://127.0.0.1:8000/api/login/', {
//         method: 'POST',
//         body: JSON.stringify({ name, password }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         if (data.success) {
//             const userData = {
//                 name,
//                 email,
//                 password,
//                 id:data.user_id
//             };
//             let users = JSON.parse(localStorage.getItem("data")) || [];
//             users.push(userData);
//             localStorage.setItem("data", JSON.stringify(users));
//             setError("");
//             // Login successful, redirect to home page
//             window.location.href = "/";
//         } else {
//             // Login failed, show error message here
//             console.log(data)
//             setError("Failed to login. Please check your username and password.");
//         }
//     })
//     .catch(error => {
//         // Handle any errors here
//         setError("An error occurred while trying to login.");
//     });
// };
// setUserid("");

const validationName = () => {
  const regx = /^\w{3,8}$/;
  if (regx.test(name)) {
    return true;
  } else {
    setError("Name Invalid...!");
    return false;
  }
};

const validationEmail = () => {
  const regx = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
  if (regx.test(email)) {
    return true;
  } else {
    setError("Email Invalid...!");
    return false;
  }
};

  const handleAlertClick = () => {
    swal({
      title: "مــــعــــلــــــش هه",
      timer: 4000,
    });
  };

  return (
    <>
      <section className="section">
      <div className="contain">
        {error && <div className="alert alert-danger">{error}</div>}
        <img src={icon} alt="" />
        <form
          action=""
          className="form-class"
          method="post"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Your Name..."
            className=" form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter Your Email..."
            className=" form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password..."
            className=" form-input form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="login">
            <button type="submit" className="login-btn">Login</button>
            <Link to="/signup" className="login-btn">Signup</Link>

            <a href="###" id="alert" onClick={handleAlertClick}>
              عارف انك نسيت كلمه السر؟
            </a>
          </div>
        </form>
      </div>
      </section>
      
    </>
  );
}

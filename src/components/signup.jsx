import React, { useState} from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function Signup() { 
    const [name, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://127.0.0.1:8000/api/users/create/', {
              name:name,
              email: email,
              password: password,
            })
              .then(response => {
                console.log(response.data);
                // show a success message to the user
              })
              .catch(error => {
                console.log(error);
                // show an error message to the user
              });
      if (validationFirstName&& validationEmail() &&validationPassword) {
        const userData = {
          name,
        //   lastname,
          email,
          password,
        };
        let users = JSON.parse(localStorage.getItem("data")) || [];
        users.push(userData);
        localStorage.setItem("data", JSON.stringify(users));
        navigate("/login");
        setError("");
      }
    };
  
    const validationFirstName = () => {
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

    const validationPassword = () => {
    const regx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    // const regx = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
    if (regx.test(password)) {
      return true;
   } else {
    setError('Password must contain at least one digit, one lowercase letter, one uppercase letter, one special character, be at least 8 characters');
      return false;
   }
};

  return (
    <form className="form" method="post" onSubmit={handleSubmit}>

            {error && <div className="alert alert-danger">{error}</div>}
      <div  className="signup">
      <h1>Sign Up Page</h1>
      <div>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter First Name:"
          value={name}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </div>
      {/* <div>
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Enter Last Name:"
          value={lastname}
          onChange={(event) => setLastName(event.target.value)}
        />
      </div> */}
      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your E-mail:"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <input
        placeholder="Enter Your Password"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="bottom">
        <button type="submit">Sign up</button>
        <a href="/login">already have an account!</a>
      </div>
      </div>
    </form>
  );  
}

export default Signup;
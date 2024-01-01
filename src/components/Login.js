import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  },[])

  const validate = () => {
    let result = true;
    if (userName === "" || userName === null) {
      result = false;
      toast.warning("Please Enter Username");
    }

    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      console.log("proceed");
      axios
        .post(`http://localhost:8000/users/`, { userName, password })
        
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            toast.error("Please enter valid username");
          } else {
            if (resp.password === password) {
              toast.success('Success');
              sessionStorage.setItem('userName', userName);
              navigate("/");
            } else {
              toast.error("Please enter valid password");
            }
          }
        })
        .catch((err) => {
          toast.error("Login Failed due to: " + err.message);
        });
    }
  };

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
        <form onSubmit={handleSubmit} className="container">
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>
                  User Name <span className="errmsg">*</span>
                </label>
                <input
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="form-control"
                ></input>
              </div>
              <div className="form-group">
                <label>
                  Password <span className="errmsg">*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                ></input>
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Login
              </button>{" "}
              |
              <Link className="btn btn-success" to={"/register"}>
                New User
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

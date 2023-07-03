import React, { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Puff } from "react-loading-icons";
import axios from "axios";

export default function Login({ setAppState }) {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigateTo = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (userInfo.email.includes("@")) {
      setIsLoading(true);
      try {
        const res = await axios.post("http://localhost:3001/auth/login", {
          email: userInfo.email,
          password: userInfo.password,
        });
        if (res?.data?.user) {
          setLoginError("");
          setAppState((prevState) => ({
            ...prevState,
            user: res.data.user.user,
            isAuthenticated: true,
            exercise: res.data.user.exercise
          }));
          navigateTo("/")
        } else {
          setLoginError("Invalid email and/or password.");
        }
      } catch (error) {
        setLoginError("Invalid email and/or password.");
      }
      setUserInfo((prevState) => ({
        ...prevState,
        email: "",
        password: "",
      }));
      setIsLoading(false);
    }
  }

  return (
    <Fragment>
      <div style={{ marginTop: "5%" }} className="register">
        <span id="register-icon">
          <FontAwesomeIcon icon={faUser} />
        </span>
        <h1 style={{ color: "var(--stark)", fontSize: "280%" }}>Welcome</h1>
        <form id="register-form">
          <input
            name="email"
            className="register-input"
            type="email"
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo((prevState) => ({
                ...prevState,
                email: e.target.value,
              }))
            }
            autoComplete="on"
            placeholder="Email"
          />
          <br />
          <div className="register-button">
            <input
              name="password"
              id="register-input"
              className="button-input"
              value={userInfo.password}
              onChange={(e) =>
                setUserInfo((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }))
              }
              type="password"
              autoComplete="on"
              placeholder="Password"
            />
            <button
              onClick={(event) => {
                event.preventDefault();
                var x = document.getElementById("register-input");
                if (x.type === "password") {
                  x.type = "text";
                } else {
                  x.type = "password";
                }
              }}
            >
              Show
            </button>
          </div>
          {userInfo.email.length === 0 ||
          userInfo.email.includes("@") ? null : (
            <>
              <span style={{ color: "red", marginLeft: "55%" }}>
                Your email must have an '@'.
              </span>
              <br />
            </>
          )}
          {loginError !== "" && (
            <span style={{ color: "red", marginLeft: "55%" }}>
              {loginError}
            </span>
          )}
          <button onClick={handleSubmit} id="register-signup">
            {isLoading ? (
              <Puff stroke="white" speed={1.25} />
            ) : (
              <span>Login</span>
            )}
          </button>
        </form>
        <p style={{ color: "var(--stark)", fontSize: "x-large" }}>
          New to Us? &nbsp;
          <Link to="/register" style={{ color: "var(--fushia)" }} href="">
            Sign Up
          </Link>
        </p>
      </div>
    </Fragment>
  );
}

import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/fontawesome-free-solid";
import style from "./Login.module.css";

fontawesome.library.add(faArrowLeft);

const Login = () => {

    const { register, handleSubmit, formState } = useForm();

    const formSubmitHandler = (data) => {
      const postData = {
          name: data.user_name,
          email: data.user_email,
          password: data.user_password
      }
      axios.post('https://ancient-everglades-98776.herokuapp.com/auth/login', postData)
      .then( res => {
          localStorage.setItem('token', res.data.data.token);
          console.log(res);
      })
      .catch( err => {
          console.log(err)
      })
    };

  return (
    <div className={`${style["signin"]} col`}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="signin_img">
              <img src="/img/login.png" alt="" className={style.signin_img} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className={`${style["signin-container"]} mb-4`}>
              <form className={style.signin_form} onSubmit={ handleSubmit(formSubmitHandler) }>
                <Link to="/">
                  <div className="d-lg-none mb-3">
                    <FontAwesomeIcon
                      icon="fa-arrow-left"
                      className={`${style["fa-arrow-left"]}`}
                    />
                  </div>
                </Link>
                <img
                  src="/img/logo.png"
                  alt="logo-img"
                  className="logo-img"
                  width="180"
                />
                <h3 className={`${style["title-signin"]} mb-3`}>Login</h3>
                <div className="mb-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`${style["signin-field"]} form-control`}
                    placeholder="Contoh: johndee@gmail.com"
                    {...register('user_email', {required: true})} 
                    autoComplete="true" 
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="user_password">Password</label>
                  <input
                    type="password"
                    name="user_password"
                    id="user_password"
                    className={`${style["signin-field"]} form-control`}
                    placeholder="Must contain 6+ characters with at least 1 number and 1 uppercase letter"
                    {...register('user_password', {required: true})} 
                    autoComplete="true" 
                  />
                </div>
                <button
                  type="submit"
                  className={`${style["btn_primary"]} btn mt-3 mb-4`}
                >
                  Login
                </button>
                <p className={style.signin_text}>
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className={`${style["redirect-text"]}`}
                    data-testid="button"
                  >
                    Register Now
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import fontawesome from "@fortawesome/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/fontawesome-free-solid";
import style from "./Register.module.css";

fontawesome.library.add(faArrowLeft);

const Register = () => {
  const { register, handleSubmit, formState } = useForm();

  const formSubmitHandler = (data) => {
    const postData = {
      name: data.user_name,
      email: data.user_email,
      password: data.user_password,
    };
    axios
      .post(
        "https://ancient-everglades-98776.herokuapp.com/auth/register",
        postData
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={`${style["signup"]}`}>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="signup_img">
              <img src="/img/login.png" alt="" className={style.signup_img} />
            </div>
          </div>
          <div className="col-lg-6">
            <div className={`${style["signup-container"]} mb-4`}>
              <form
                className={style.signup_form}
                onSubmit={handleSubmit(formSubmitHandler)}
              >
                <Link to="/login">
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
                <h3 className={`${style["title-signup"]} mb-3`}>Sign Up</h3>
                <div className="mb-2">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className={`${style["signup-field"]} form-control`}
                    placeholder="Contoh: John Dee"
                    {...register("user_name", { required: true })}
                    autoComplete="true"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className={`${style["signup-field"]} form-control`}
                    placeholder="Contoh: johndee@gmail.com"
                    {...register("user_email", { required: true })}
                    autoComplete="true"
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className={`${style["signup-field"]} form-control`}
                    placeholder="Must contain 6+ characters with at least 1 number and 1 uppercase letter"
                    {...register("user_password", { required: true })}
                    autoComplete="true"
                  />
                </div>
                <button
                  type="submit"
                  className={`${style["btn_primary"]} btn mt-3 mb-4`}
                >
                  Sign Up
                </button>
                <p className={style.signup_text}>
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className={`${style["redirect-text"]}`}
                    data-testid="button"
                  >
                    Login
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

export default Register;

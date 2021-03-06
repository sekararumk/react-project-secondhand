import React from "react";
import { Link } from "react-router-dom";
import style from "./DaftarJual.module.css";
import SecondaryNavbar from "../../Component/SecondaryNavbar/SecondaryNavbar";
import Card from "../../Component/Card/Card";

function DaftarJual() {
  return (
    <div>
      <SecondaryNavbar />
      <div className="container">
        <div className="row offset-lg-1 justify-content-center">
          <div className="col-lg-10">
            <div className="fw-bold mb-4">Daftar Jual Saya</div>
            <div className={`${style["profile_wrapper"]} card mb-3`}>
              <div className={`${style["card_profile"]} card-body`}>
                <img
                  src="/img/profile-pict.png"
                  alt="profile-img"
                  className="profile-img"
                />
                <div className="d-flex align-center justify-content-between">
                  <div className="col-lg-10">
                    <div className={`${style.text_penjual} fw-bold`}>
                      Nama Penjual
                    </div>
                    <div className={`${style.text_penjual} text-muted`}>
                      Kota
                    </div>
                  </div>
                  <Link to="/">
                    <button type="submit" className={`${style["btn_edit"]}`}>
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className={`${style["category_wrapper"]} mb-3`}>
                  <div className="card-body">
                    <p className="fw-semibold">Kategori</p>
                    <div className="row">
                      <div className="col-1">
                        <i className="fa-solid fa-box mt-1"></i>
                      </div>
                      <div className="col-8">
                        <p>Semua Produk</p>
                      </div>
                      <div className="col-1">
                        <i className="fa-solid fa-angle-right"></i>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-1">
                        <i className="fa-regular fa-heart mt-1"></i>
                      </div>
                      <div className="col-8">
                        <p>Diminati</p>
                      </div>
                      <div className="col-1">
                        <i className="fa-solid fa-angle-right"></i>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-1">
                        <i className="fa-solid fa-dollar-sign mt-1"></i>
                      </div>
                      <div className="col-8">
                        <p>Terjual</p>
                      </div>
                      <div className="col-1">
                        <i className="fa-solid fa-angle-right"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${style["category_button"]}`}>
                  <div className="btn-wrapper">
                    <button
                      type="submit"
                      className={`${style["btn_categories"]} btn mb-2`}
                    >
                      <i className="fa-solid fa-box"></i> Semua Produk
                    </button>
                    <button
                      type="submit"
                      className={`${style["btn_categories"]} btn mb-2`}
                    >
                      <i className="fa-regular fa-heart"></i> Diminati
                    </button>
                    <button
                      type="submit"
                      className={`${style["btn_categories"]} btn mb-2`}
                    >
                      <i className="fa-solid fa-dollar-sign"></i> Terjual
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-4 col-6">
                    {/* <img src="/img/add-product.png" alt="add-img" className="add-img" /> */}
                    <Card />
                  </div>
                  <div className="col-lg-4 col-6">
                    <Card />
                  </div>
                  <div className="col-lg-4 col-6">
                    <Card />
                  </div>
                  <div className="col-lg-4 col-6">
                    <Card />
                  </div>
                  <div className="col-lg-4 col-6">
                    <Card />
                  </div>
                  <div className="col-lg-4 col-6">
                    <Card />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaftarJual;

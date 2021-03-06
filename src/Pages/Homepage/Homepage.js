import React from 'react'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from '@fortawesome/fontawesome-free-solid'
import style from './Homepage.module.css'
import Navbar from '../../Component/Navbar/Navbar'
import Carousel from '../../Component/Carousel/Carousel'
import Card from '../../Component/Card/Card'
import Category from '../../Component/Category/Category'


fontawesome.library.add(faPlus);

const Homepage = () => {
  return (
    <>
      <Navbar />
      <main id="main">
        <div className="container-carousel">
          <Carousel />
        </div>
        <section id="category">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col">
                <p className={`${style['title-category']} px-3`}>Telusuri Kategori</p>
                <Category />
              </div>
              <div className='container mt-3 mr-4'>
                <div className="row row-cols-2 row-cols-lg-6">
                  <div className="col">
                    <Card />
                  </div>
                  <div className="col">
                    <Card />
                  </div>
                  <div className="col">
                    <Card />
                  </div>
                  <div className="col">
                    <Card />
                  </div>
                  <div className="col">
                    <Card />
                  </div>
                  <div className="col">
                    <Card />
                  </div>
                  <div className="col">
                    <Card />
                  </div>
                  <div className="col">
                    <Card />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="add-button">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <button type="submit" className={`${style['btn_small']} btn mt-2 mb-2`}><FontAwesomeIcon icon="fa-plus"  className={`${style['fa-plus']}`}/> Add</button>
            </div>
          </div>   
        </section>
      </main>
    </>
  )
}

export default Homepage
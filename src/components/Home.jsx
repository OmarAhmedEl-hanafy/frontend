import React from 'react';
import icon from "../image/icon.png";
import "./Home.css";
import Navbar from './Navbar';
import Footer from './Footer';
// import "./main.css";
// import {useNavigate} from "react-router-dom";
import { useState,useEffect } from 'react';
import img1 from "../image/1.jpg";
import img3 from "../image/3.jpg";

export default function Home() {
// -----------------------
useEffect(() => {
    // ---------------------------- random ----------------------------
    let random = document.querySelectorAll('#review-random')
    function randomReviews()
    {
        for (let i = 0; i < random.length; i++)
        {
            random[i].innerHTML =  Math.round(Math.random()*5000)+`K`
        }
    }
        setInterval( randomReviews , 2000)});

    // ---------------------------- Loading ----------------------------
    const [loading, setloading] = useState(false);
    useEffect(() => {
        const isLoadingTimeout = setTimeout(() => {
            ('#isLoading img').fadeOut(2000, () => {
                ('#isLoading').slideUp(2000, () => {
                    ('#isLoading').remove();
                    ('body').css('overflow', 'auto');
                    setloading(false);
                });
            });
        }, 2000);
        return () => {
            clearTimeout(isLoadingTimeout);
        };
    }, []);
    
    useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 4000);
  }, []);

    return (
        <>
            {loading ? (<div className="isLoading">
            <img  src={icon} alt="" className="fa-spin"></img>
            </div>):(
                <>
                <Navbar/>
                <div className='home d-flex align-items-center justify-content-center text-light' id='home'>
                    <div className='home_contnet'>
                        <h1>Welcome To <span>Movies</span> Hub</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti aliquam animi dolore debitis at dolorme?</p>
                    </div>
                </div>
                <section className="about bg-light py-5" id="about">
        <div className="container">
            <div className="about-caption py-5 text-center ">
                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique earum vel
                    doloremque
                    neque
                    minima, enim quidem. At odit labore exercitationem facere illum minus placeat nobis libero inventore
                    possimus, rem sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusamus, non
                    consectetur sit, voluptatibus eum ipsum recusandae, eligendi nihil obcaecati amet maiores sed fugit
                    dignissimos aperiam illo modi fugiat ab?</p>
            </div>
            <div className="row g-5">
                <div className="col-md-4">
                    <div className="about-item shadow rounded py-5 px-3 text-center">
                        <h4>Action</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="about-item shadow rounded py-5 px-3 text-center">
                        <h4>Stories</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="about-item shadow rounded py-5 px-3 text-center">
                        <h4>Tv</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
                
    {/* // start category  --> */}
    <section className="category py-5" id="category">
        <div className="container">
            <div className="category-caption d-flex justify-content-center align-items-center py-5">
                <h3 className=" text-uppercase">Categories</h3>
            </div>
            <div className="row align-items-center g-5">
                <div className="col-md-6">
                    <div className="image rounded shadow overflow-hidden">
                        <img className="w-100" src={img1} alt=""/>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="image rounded shadow overflow-hidden">
                        <img className="w-100" src={img3} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="review">
        <div className=" py-5">
            <div className="container">
                <div className="row justify-content-center g-5">
                    <div className="col-md-4 text-center">
                        <div className="review-item  text-center">
                            <span className=" fs-2" id="review-random"></span>
                            <h5 className=" text-white">Reviews</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="review-item  text-center">
                            <span className=" fs-2" id="review-random"></span>
                            <h5 className=" text-white">Watching</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="review-item  text-center">
                            <span className=" fs-2" id="review-random"></span>
                            <h5 className=" text-white">Subscribe</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
                <Footer/>
                </>
            )}
        </>
    )
}

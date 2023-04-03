/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import "./Footer.css";
//import "./main.css";
export default function Footer() {
    
    return (
        <>
            <footer className="footer text-center py-5">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-3">
                            <div className="footer text-white">
                                <h6>&copy;Copyright. All Reserved <span>Omar Ahmed El-Hanafy</span></h6>
                                <div className="footer-social d-flex justify-content-evenly align-items-baseline py-2">
                                    <a><i className="fs-4 fa-brands fa-facebook"></i></a>
                                    <a><i className="fs-4 fa-brands fa-linkedin"></i></a>
                                    <a><i className="fs-4 fa-brands fa-github"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
        )
    }
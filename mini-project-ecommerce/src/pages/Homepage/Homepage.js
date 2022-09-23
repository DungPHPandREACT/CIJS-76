import React from 'react';

const Homepage = () => {
  return (
    <div>
      {/* Search Wrapper Area Start */}
      <div className="search-wrapper section-padding-100">
        <div className="search-close">
          <i className="fa fa-close" aria-hidden="true" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="search-content">
                <form action="#" method="get">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Type your keyword..."
                  />
                  <button type="submit">
                    <img src="img/core-img/search.png" alt="" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Search Wrapper Area End */}
      {/* ##### Main Content Wrapper Start ##### */}
      <div className="main-content-wrapper d-flex clearfix">
        {/* Mobile Nav (max width 767px)*/}
        <div className="mobile-nav">
          {/* Navbar Brand */}
          <div className="amado-navbar-brand">
            <a href="index.html">
              <img src="img/core-img/logo.png" alt="" />
            </a>
          </div>
          {/* Navbar Toggler */}
          <div className="amado-navbar-toggler">
            <span />
            <span />
            <span />
          </div>
        </div>
        {/* Header Area Start */}
        <header className="header-area clearfix">
          {/* Close Icon */}
          <div className="nav-close">
            <i className="fa fa-close" aria-hidden="true" />
          </div>
          {/* Logo */}
          <div className="logo">
            <a href="index.html">
              <img src="img/core-img/logo.png" alt="" />
            </a>
          </div>
          {/* Amado Nav */}
          <nav className="amado-nav">
            <ul>
              <li className="active">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="shop.html">Shop</a>
              </li>
              <li>
                <a href="product-details.html">Product</a>
              </li>
              <li>
                <a href="cart.html">Cart</a>
              </li>
              <li>
                <a href="checkout.html">Checkout</a>
              </li>
            </ul>
          </nav>
          {/* Button Group */}
          <div className="amado-btn-group mt-30 mb-100">
            <a href="#" className="btn amado-btn mb-15">
              %Discount%
            </a>
            <a href="#" className="btn amado-btn active">
              New this week
            </a>
          </div>
          {/* Cart Menu */}
          <div className="cart-fav-search mb-100">
            <a href="cart.html" className="cart-nav">
              <img src="img/core-img/cart.png" alt="" /> Cart <span>(0)</span>
            </a>
            <a href="#" className="fav-nav">
              <img src="img/core-img/favorites.png" alt="" /> Favourite
            </a>
            <a href="#" className="search-nav">
              <img src="img/core-img/search.png" alt="" /> Search
            </a>
          </div>
          {/* Social Button */}
          <div className="social-info d-flex justify-content-between">
            <a href="#">
              <i className="fa fa-pinterest" aria-hidden="true" />
            </a>
            <a href="#">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
            <a href="#">
              <i className="fa fa-facebook" aria-hidden="true" />
            </a>
            <a href="#">
              <i className="fa fa-twitter" aria-hidden="true" />
            </a>
          </div>
        </header>
        {/* Header Area End */}
        {/* Product Catagories Area Start */}
        <div className="products-catagories-area clearfix">
          <div className="amado-pro-catagory clearfix">
            {/* Single Catagory */}
            <div className="single-products-catagory clearfix">
              <a href="shop.html">
                <img src="img/bg-img/1.jpg" alt="" />
                {/* Hover Content */}
                <div className="hover-content">
                  <div className="line" />
                  <p>From $180</p>
                  <h4>Modern Chair</h4>
                </div>
              </a>
            </div>
            {/* Single Catagory */}
            <div className="single-products-catagory clearfix">
              <a href="shop.html">
                <img src="img/bg-img/2.jpg" alt="" />
                {/* Hover Content */}
                <div className="hover-content">
                  <div className="line" />
                  <p>From $180</p>
                  <h4>Minimalistic Plant Pot</h4>
                </div>
              </a>
            </div>
            {/* Single Catagory */}
            <div className="single-products-catagory clearfix">
              <a href="shop.html">
                <img src="img/bg-img/3.jpg" alt="" />
                {/* Hover Content */}
                <div className="hover-content">
                  <div className="line" />
                  <p>From $180</p>
                  <h4>Modern Chair</h4>
                </div>
              </a>
            </div>
            {/* Single Catagory */}
            <div className="single-products-catagory clearfix">
              <a href="shop.html">
                <img src="img/bg-img/4.jpg" alt="" />
                {/* Hover Content */}
                <div className="hover-content">
                  <div className="line" />
                  <p>From $180</p>
                  <h4>Night Stand</h4>
                </div>
              </a>
            </div>
            {/* Single Catagory */}
            <div className="single-products-catagory clearfix">
              <a href="shop.html">
                <img src="img/bg-img/5.jpg" alt="" />
                {/* Hover Content */}
                <div className="hover-content">
                  <div className="line" />
                  <p>From $18</p>
                  <h4>Plant Pot</h4>
                </div>
              </a>
            </div>
            {/* Single Catagory */}
            <div className="single-products-catagory clearfix">
              <a href="shop.html">
                <img src="img/bg-img/6.jpg" alt="" />
                {/* Hover Content */}
                <div className="hover-content">
                  <div className="line" />
                  <p>From $320</p>
                  <h4>Small Table</h4>
                </div>
              </a>
            </div>
            {/* Single Catagory */}
            <div className="single-products-catagory clearfix">
              <a href="shop.html">
                <img src="img/bg-img/7.jpg" alt="" />
                {/* Hover Content */}
                <div className="hover-content">
                  <div className="line" />
                  <p>From $318</p>
                  <h4>Metallic Chair</h4>
                </div>
              </a>
            </div>
            {/* Single Catagory */}
            <div className="single-products-catagory clearfix">
              <a href="shop.html">
                <img src="img/bg-img/8.jpg" alt="" />
                {/* Hover Content */}
                <div className="hover-content">
                  <div className="line" />
                  <p>From $318</p>
                  <h4>Modern Rocking Chair</h4>
                </div>
              </a>
            </div>
            {/* Single Catagory */}
            <div className="single-products-catagory clearfix">
              <a href="shop.html">
                <img src="img/bg-img/9.jpg" alt="" />
                {/* Hover Content */}
                <div className="hover-content">
                  <div className="line" />
                  <p>From $318</p>
                  <h4>Home Deco</h4>
                </div>
              </a>
            </div>
          </div>
        </div>
        {/* Product Catagories Area End */}
      </div>
      {/* ##### Main Content Wrapper End ##### */}
      {/* ##### Newsletter Area Start ##### */}
      <section className="newsletter-area section-padding-100-0">
        <div className="container">
          <div className="row align-items-center">
            {/* Newsletter Text */}
            <div className="col-12 col-lg-6 col-xl-7">
              <div className="newsletter-text mb-100">
                <h2>
                  Subscribe for a <span>25% Discount</span>
                </h2>
                <p>
                  Nulla ac convallis lorem, eget euismod nisl. Donec in libero
                  sit amet mi vulputate consectetur. Donec auctor interdum
                  purus, ac finibus massa bibendum nec.
                </p>
              </div>
            </div>
            {/* Newsletter Form */}
            <div className="col-12 col-lg-6 col-xl-5">
              <div className="newsletter-form mb-100">
                <form action="#" method="post">
                  <input
                    type="email"
                    name="email"
                    className="nl-email"
                    placeholder="Your E-mail"
                  />
                  <input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ##### Newsletter Area End ##### */}
      {/* ##### Footer Area Start ##### */}
      <footer className="footer_area clearfix">
        <div className="container">
          <div className="row align-items-center">
            {/* Single Widget Area */}
            <div className="col-12 col-lg-4">
              <div className="single_widget_area">
                {/* Logo */}
                <div className="footer-logo mr-50">
                  <a href="index.html">
                    <img src="img/core-img/logo2.png" alt="" />
                  </a>
                </div>
                {/* Copywrite Text */}
                <p className="copywrite">
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright © All rights reserved | This template is made with{' '}
                  <i className="fa fa-heart-o" aria-hidden="true" /> by{' '}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>{' '}
                  &amp; Re-distributed by{' '}
                  <a href="https://themewagon.com/" target="_blank">
                    Themewagon
                  </a>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
            {/* Single Widget Area */}
            <div className="col-12 col-lg-8">
              <div className="single_widget_area">
                {/* Footer Menu */}
                <div className="footer_menu">
                  <nav className="navbar navbar-expand-lg justify-content-end">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#footerNavContent"
                      aria-controls="footerNavContent"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <i className="fa fa-bars" />
                    </button>
                    <div
                      className="collapse navbar-collapse"
                      id="footerNavContent"
                    >
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                          <a className="nav-link" href="index.html">
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="shop.html">
                            Shop
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="product-details.html">
                            Product
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="cart.html">
                            Cart
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="checkout.html">
                            Checkout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;

import React from 'react';

const Shop = () => {
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
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">
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
        <div className="shop_sidebar_area">
          {/* ##### Single Widget ##### */}
          <div className="widget catagory mb-50">
            {/* Widget Title */}
            <h6 className="widget-title mb-30">Catagories</h6>
            {/*  Catagories  */}
            <div className="catagories-menu">
              <ul>
                <li className="active">
                  <a href="#">Chairs</a>
                </li>
                <li>
                  <a href="#">Beds</a>
                </li>
                <li>
                  <a href="#">Accesories</a>
                </li>
                <li>
                  <a href="#">Furniture</a>
                </li>
                <li>
                  <a href="#">Home Deco</a>
                </li>
                <li>
                  <a href="#">Dressings</a>
                </li>
                <li>
                  <a href="#">Tables</a>
                </li>
              </ul>
            </div>
          </div>
          {/* ##### Single Widget ##### */}
          <div className="widget brands mb-50">
            {/* Widget Title */}
            <h6 className="widget-title mb-30">Brands</h6>
            <div className="widget-desc">
              {/* Single Form Check */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="amado"
                />
                <label className="form-check-label" htmlFor="amado">
                  Amado
                </label>
              </div>
              {/* Single Form Check */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="ikea"
                />
                <label className="form-check-label" htmlFor="ikea">
                  Ikea
                </label>
              </div>
              {/* Single Form Check */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="furniture"
                />
                <label className="form-check-label" htmlFor="furniture">
                  Furniture Inc
                </label>
              </div>
              {/* Single Form Check */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="factory"
                />
                <label className="form-check-label" htmlFor="factory">
                  The factory
                </label>
              </div>
              {/* Single Form Check */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="artdeco"
                />
                <label className="form-check-label" htmlFor="artdeco">
                  Artdeco
                </label>
              </div>
            </div>
          </div>
          {/* ##### Single Widget ##### */}
          <div className="widget color mb-50">
            {/* Widget Title */}
            <h6 className="widget-title mb-30">Color</h6>
            <div className="widget-desc">
              <ul className="d-flex">
                <li>
                  <a href="#" className="color1" />
                </li>
                <li>
                  <a href="#" className="color2" />
                </li>
                <li>
                  <a href="#" className="color3" />
                </li>
                <li>
                  <a href="#" className="color4" />
                </li>
                <li>
                  <a href="#" className="color5" />
                </li>
                <li>
                  <a href="#" className="color6" />
                </li>
                <li>
                  <a href="#" className="color7" />
                </li>
                <li>
                  <a href="#" className="color8" />
                </li>
              </ul>
            </div>
          </div>
          {/* ##### Single Widget ##### */}
          <div className="widget price mb-50">
            {/* Widget Title */}
            <h6 className="widget-title mb-30">Price</h6>
            <div className="widget-desc">
              <div className="slider-range">
                <div
                  data-min={10}
                  data-max={1000}
                  data-unit="$"
                  className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                  data-value-min={10}
                  data-value-max={1000}
                  data-label-result
                >
                  <div className="ui-slider-range ui-widget-header ui-corner-all" />
                  <span
                    className="ui-slider-handle ui-state-default ui-corner-all"
                    tabIndex={0}
                  />
                  <span
                    className="ui-slider-handle ui-state-default ui-corner-all"
                    tabIndex={0}
                  />
                </div>
                <div className="range-price">$10 - $1000</div>
              </div>
            </div>
          </div>
        </div>
        <div className="amado_product_area section-padding-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="product-topbar d-xl-flex align-items-end justify-content-between">
                  {/* Total Products */}
                  <div className="total-products">
                    <p>Showing 1-8 0f 25</p>
                    <div className="view d-flex">
                      <a href="#">
                        <i className="fa fa-th-large" aria-hidden="true" />
                      </a>
                      <a href="#">
                        <i className="fa fa-bars" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                  {/* Sorting */}
                  <div className="product-sorting d-flex">
                    <div className="sort-by-date d-flex align-items-center mr-15">
                      <p>Sort by</p>
                      <form action="#" method="get">
                        <select name="select" id="sortBydate">
                          <option value="value">Date</option>
                          <option value="value">Newest</option>
                          <option value="value">Popular</option>
                        </select>
                      </form>
                    </div>
                    <div className="view-product d-flex align-items-center">
                      <p>View</p>
                      <form action="#" method="get">
                        <select name="select" id="viewProduct">
                          <option value="value">12</option>
                          <option value="value">24</option>
                          <option value="value">48</option>
                          <option value="value">96</option>
                        </select>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Single Product Area */}
              <div className="col-12 col-sm-6 col-md-12 col-xl-6">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="img/product-img/product1.jpg" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="img/product-img/product2.jpg"
                      alt=""
                    />
                  </div>
                  {/* Product Description */}
                  <div className="product-description d-flex align-items-center justify-content-between">
                    {/* Product Meta Data */}
                    <div className="product-meta-data">
                      <div className="line" />
                      <p className="product-price">$180</p>
                      <a href="product-details.html">
                        <h6>Modern Chair</h6>
                      </a>
                    </div>
                    {/* Ratings & Cart */}
                    <div className="ratings-cart text-right">
                      <div className="ratings">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </div>
                      <div className="cart">
                        <a
                          href="cart.html"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Cart"
                        >
                          <img src="img/core-img/cart.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Product Area */}
              <div className="col-12 col-sm-6 col-md-12 col-xl-6">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="img/product-img/product2.jpg" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="img/product-img/product3.jpg"
                      alt=""
                    />
                  </div>
                  {/* Product Description */}
                  <div className="product-description d-flex align-items-center justify-content-between">
                    {/* Product Meta Data */}
                    <div className="product-meta-data">
                      <div className="line" />
                      <p className="product-price">$180</p>
                      <a href="product-details.html">
                        <h6>Modern Chair</h6>
                      </a>
                    </div>
                    {/* Ratings & Cart */}
                    <div className="ratings-cart text-right">
                      <div className="ratings">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </div>
                      <div className="cart">
                        <a
                          href="cart.html"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Cart"
                        >
                          <img src="img/core-img/cart.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Product Area */}
              <div className="col-12 col-sm-6 col-md-12 col-xl-6">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="img/product-img/product3.jpg" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="img/product-img/product4.jpg"
                      alt=""
                    />
                  </div>
                  {/* Product Description */}
                  <div className="product-description d-flex align-items-center justify-content-between">
                    {/* Product Meta Data */}
                    <div className="product-meta-data">
                      <div className="line" />
                      <p className="product-price">$180</p>
                      <a href="product-details.html">
                        <h6>Modern Chair</h6>
                      </a>
                    </div>
                    {/* Ratings & Cart */}
                    <div className="ratings-cart text-right">
                      <div className="ratings">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </div>
                      <div className="cart">
                        <a
                          href="cart.html"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Cart"
                        >
                          <img src="img/core-img/cart.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Product Area */}
              <div className="col-12 col-sm-6 col-md-12 col-xl-6">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="img/product-img/product4.jpg" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="img/product-img/product5.jpg"
                      alt=""
                    />
                  </div>
                  {/* Product Description */}
                  <div className="product-description d-flex align-items-center justify-content-between">
                    {/* Product Meta Data */}
                    <div className="product-meta-data">
                      <div className="line" />
                      <p className="product-price">$180</p>
                      <a href="product-details.html">
                        <h6>Modern Chair</h6>
                      </a>
                    </div>
                    {/* Ratings & Cart */}
                    <div className="ratings-cart text-right">
                      <div className="ratings">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </div>
                      <div className="cart">
                        <a
                          href="cart.html"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Cart"
                        >
                          <img src="img/core-img/cart.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Product Area */}
              <div className="col-12 col-sm-6 col-md-12 col-xl-6">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="img/product-img/product5.jpg" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="img/product-img/product6.jpg"
                      alt=""
                    />
                  </div>
                  {/* Product Description */}
                  <div className="product-description d-flex align-items-center justify-content-between">
                    {/* Product Meta Data */}
                    <div className="product-meta-data">
                      <div className="line" />
                      <p className="product-price">$180</p>
                      <a href="product-details.html">
                        <h6>Modern Chair</h6>
                      </a>
                    </div>
                    {/* Ratings & Cart */}
                    <div className="ratings-cart text-right">
                      <div className="ratings">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </div>
                      <div className="cart">
                        <a
                          href="cart.html"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Cart"
                        >
                          <img src="img/core-img/cart.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Single Product Area */}
              <div className="col-12 col-sm-6 col-md-12 col-xl-6">
                <div className="single-product-wrapper">
                  {/* Product Image */}
                  <div className="product-img">
                    <img src="img/product-img/product6.jpg" alt="" />
                    {/* Hover Thumb */}
                    <img
                      className="hover-img"
                      src="img/product-img/product1.jpg"
                      alt=""
                    />
                  </div>
                  {/* Product Description */}
                  <div className="product-description d-flex align-items-center justify-content-between">
                    {/* Product Meta Data */}
                    <div className="product-meta-data">
                      <div className="line" />
                      <p className="product-price">$180</p>
                      <a href="product-details.html">
                        <h6>Modern Chair</h6>
                      </a>
                    </div>
                    {/* Ratings & Cart */}
                    <div className="ratings-cart text-right">
                      <div className="ratings">
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                        <i className="fa fa-star" aria-hidden="true" />
                      </div>
                      <div className="cart">
                        <a
                          href="cart.html"
                          data-toggle="tooltip"
                          data-placement="left"
                          title="Add to Cart"
                        >
                          <img src="img/core-img/cart.png" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                {/* Pagination */}
                <nav aria-label="navigation">
                  <ul className="pagination justify-content-end mt-50">
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        01.
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        02.
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        03.
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        04.
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
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

export default Shop;

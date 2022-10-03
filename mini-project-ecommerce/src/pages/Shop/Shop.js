import React from 'react';

const Shop = () => {
  return (
    <>
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
                  <li className="page-item">
                    <a className="page-link active" href="#">
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
    </>
  );
};

export default Shop;

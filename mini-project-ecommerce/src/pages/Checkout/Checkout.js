import React from 'react';

const Checkout = () => {
  return (
    <div className="cart-table-area section-padding-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="checkout_details_area mt-50 clearfix">
              <div className="cart-title">
                <h2>Checkout</h2>
              </div>
              <form action="#" method="post">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="first_name"
                      defaultValue
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="last_name"
                      defaultValue
                      placeholder="Last Name"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="company"
                      placeholder="Company Name"
                      defaultValue
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      defaultValue
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <select className="w-100" id="country">
                      <option value="usa">United States</option>
                      <option value="uk">United Kingdom</option>
                      <option value="ger">Germany</option>
                      <option value="fra">France</option>
                      <option value="ind">India</option>
                      <option value="aus">Australia</option>
                      <option value="bra">Brazil</option>
                      <option value="cana">Canada</option>
                    </select>
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control mb-3"
                      id="street_address"
                      placeholder="Address"
                      defaultValue
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      placeholder="Town"
                      defaultValue
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="zipCode"
                      placeholder="Zip Code"
                      defaultValue
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="phone_number"
                      min={0}
                      placeholder="Phone No"
                      defaultValue
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <textarea
                      name="comment"
                      className="form-control w-100"
                      id="comment"
                      cols={30}
                      rows={10}
                      placeholder="Leave a comment about your order"
                      defaultValue={''}
                    />
                  </div>
                  <div className="col-12">
                    <div className="custom-control custom-checkbox d-block mb-2">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck2"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck2"
                      >
                        Create an accout
                      </label>
                    </div>
                    <div className="custom-control custom-checkbox d-block">
                      <input
                        type="checkbox"
                        className="custom-control-input"
                        id="customCheck3"
                      />
                      <label
                        className="custom-control-label"
                        htmlFor="customCheck3"
                      >
                        Ship to a different address
                      </label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="cart-summary">
              <h5>Cart Total</h5>
              <ul className="summary-table">
                <li>
                  <span>subtotal:</span> <span>$140.00</span>
                </li>
                <li>
                  <span>delivery:</span> <span>Free</span>
                </li>
                <li>
                  <span>total:</span> <span>$140.00</span>
                </li>
              </ul>
              <div className="payment-method">
                {/* Cash on delivery */}
                <div className="custom-control custom-checkbox mr-sm-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="cod"
                    defaultChecked
                  />
                  <label className="custom-control-label" htmlFor="cod">
                    Cash on Delivery
                  </label>
                </div>
                {/* Paypal */}
                <div className="custom-control custom-checkbox mr-sm-2">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="paypal"
                  />
                  <label className="custom-control-label" htmlFor="paypal">
                    Paypal{' '}
                    <img
                      className="ml-15"
                      src="img/core-img/paypal.png"
                      alt=""
                    />
                  </label>
                </div>
              </div>
              <div className="cart-btn mt-100">
                <a href="#" className="btn amado-btn w-100">
                  Checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

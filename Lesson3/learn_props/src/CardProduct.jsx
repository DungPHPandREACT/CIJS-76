import React from 'react';

const CardProduct = (props) => {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img
          className="card-img-top"
          src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
          alt="..."
        />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{props.title}</h5>
            {/* ${props.price1} - ${props.price2} */}
            {props.promotionalPrice ? (
              <span>
                <span className="text-muted text-decoration-line-through">
                  ${props.price1}
                </span>
                ${props.price2}
              </span>
            ) : props.price1 && !props.price2 ? (
              `$${props.price1}`
            ) : (
              `$${props.price1} - $${props.price2}`
            )}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <a className="btn btn-outline-dark mt-auto" href="#">
              View options
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;

import React from 'react';
import CardProduct from './CardProduct';

const Section = () => {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <CardProduct title="Fancy Product" price1="40.000" price2="80.000" />
          <CardProduct
            title="Special Item"
            price1="20.000"
            price2="18.000"
            promotionalPrice={true}
          />
          <CardProduct
            title="Sale Item"
            price1="50.000"
            price2="25.000"
            promotionalPrice={true}
          />
          <CardProduct title="Popular Item" price1="40.000" />
          <CardProduct title="Sale Item" />
          <CardProduct title="Fancy Product" />
          <CardProduct title="Special Item" />
          <CardProduct title="Popular Item" />
        </div>
      </div>
    </section>
  );
};

export default Section;

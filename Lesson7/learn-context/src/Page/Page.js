import React from 'react';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

const Page = (props) => {
  console.log('giá trị props: ', props.color);

  return (
    <div>
      <Header color={props.color} />
      <Body color={props.color} changeColor={props.setColor} />
      <Footer color={props.color} />
    </div>
  );
};

export default Page;

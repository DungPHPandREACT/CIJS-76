import React, { useContext } from 'react';
import { Navbar } from 'reactstrap';
import { ExampleContext } from '../App';
import { language } from '../language';

const Footer = () => {
  const data = useContext(ExampleContext);
  const handleChangeLanguage = (event) => {
    const dataTemp = { ...data.data };
    dataTemp.language = event.target.value;
    localStorage.setItem(
      'data',
      JSON.stringify({ ...dataTemp, ...language[dataTemp.language] })
    );
    console.log({ ...dataTemp, ...language[dataTemp.language] });
    data.setData({ ...dataTemp, ...language[dataTemp.language] });
  };

  return (
    <Navbar className="" color="dark" dark>
      {/* Select language */}
      <select
        value={data.data.language}
        onChange={handleChangeLanguage}
        className="dropdown-language"
      >
        <option value="en">English</option>
        <option value="vi">Tiếng Việt</option>
        <option value="jp">Japanese</option>
      </select>
    </Navbar>
  );
};

export default Footer;

import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container-app">
      {/* <div className="container-app__add">
        <button className="btn-app btn-add-new">ADD NEW EXPENSE</button>
      </div> */}
      <div className="container-app__form">
        <div className="row-input">
          <label>Name</label>
          <input type="text" placeholder="Enter name here ..." />
        </div>
        <div className="row-input">
          <label>Amount</label>
          <input type="text" placeholder="Enter amount here ..." />
        </div>
        <div className="row-input">
          <label>Date</label>
          <input type="date" placeholder="dd/mm/yy" />
        </div>
        <div className="row-input row-button">
          <button className="button-add">Add</button>
          <button className="button-cancel">Cancel</button>
        </div>
      </div>
      <div className="container-app__content">
        <div className="content-header">
          <p>Filter by year</p>
          <select>
            <option>2022</option>
            <option>2021</option>
          </select>
        </div>
        <div className="content-body">
          <div className="content-body__chart">
            <div className="chart">
              <p>Jan</p>
              <div className="chart-percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
            <div className="chart">
              <p>Jan</p>
              <div className="chart-percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
            <div className="chart">
              <p>Jan</p>
              <div className="chart-percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
            <div className="chart">
              <p>Jan</p>
              <div className="chart-percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
            <div className="chart">
              <p>Jan</p>
              <div className="chart-percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
            <div className="chart">
              <p>Jan</p>
              <div className="chart-percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
            <div className="chart">
              <p>Jan</p>
              <div className="chart-percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
            <div className="chart">
              <p>Jan</p>
              <div className="chart-percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
            <div className="chart">
              <p>Jan</p>
              <div className="chart-percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
            <div className="chart">
              <p>Jan</p>
              <div className="chart-percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
            <div className="chart">
              <p>Jan</p>
              <div className="chart-percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
            <div className="chart">
              <p>Jan</p>
              <div className="chart-percent">
                <div className="chart-bar-fill"></div>
              </div>
            </div>
          </div>
          <div className="content-body__expense">
            <div className="expense-left">
              <div className="expense-time">
                <p className="expense-time__month">January</p>
                <p className="expense-time__year">2022</p>
                <p className="expense-time__day">16</p>
              </div>
              <h3 className="expense-title">Some Book</h3>
            </div>
            <div className="expense-money">$50</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

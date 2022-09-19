import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [listExpense, setListExpense] = useState([]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const [toggleForm, setToggleForm] = useState(false);

  const handleShowForm = () => {
    setToggleForm(true);
  };

  const handleAddExpense = () => {
    const expense = {
      name,
      amount,
      date,
    };
    // C1
    // const data = [...listExpense];
    // data.push(expense);
    // setListExpense([...data])
    // C2
    setListExpense([...listExpense, expense]);
  };

  console.log(listExpense);

  return (
    <div className="container-app">
      {/* Button Add new expense */}
      {toggleForm ? (
        <div className="container-app__form">
          <div className="row-input">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter name here ..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="row-input">
            <label>Amount</label>
            <input
              type="text"
              placeholder="Enter amount here ..."
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="row-input">
            <label>Date</label>
            <input
              type="date"
              placeholder="dd/mm/yy"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="row-input row-button">
            <button className="button-add" onClick={handleAddExpense}>
              Add
            </button>
            <button className="button-cancel">Cancel</button>
          </div>
        </div>
      ) : (
        <div className="container-app__add">
          <button className="btn-app btn-add-new" onClick={handleShowForm}>
            ADD NEW EXPENSE
          </button>
        </div>
      )}

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

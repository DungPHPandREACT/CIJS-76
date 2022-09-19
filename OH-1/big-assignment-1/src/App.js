import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [listExpense, setListExpense] = useState([
    {
      name: 'Nguyễn Văn A',
      amount: 40,
      date: '2022-01-01',
    },
    {
      name: 'Nguyễn Văn A',
      amount: 60,
      date: '2022-9-9',
    },
    {
      name: 'Nguyễn Văn B',
      amount: 20,
      date: '2021-09-09',
    },
    {
      name: 'Nguyễn Văn B',
      amount: 80,
      date: '2021-01-01',
    },
  ]);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [yearFilter, setYearFilter] = useState('2022');
  const [listChart, setListChart] = useState([]);

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
    console.log('date: ', date);
    // C1
    // const data = [...listExpense];
    // data.push(expense);
    // setListExpense([...data])
    // C2
    setListExpense([...listExpense, expense]);
  };

  const handleCloseForm = () => {
    setToggleForm(false);
    setName('');
    setAmount('');
    setDate('');
  };

  const handleGetYearFilter = (event) => {
    let total = 0;
    console.log(event.target.value);
    setYearFilter(event.target.value);
    let listData = listExpense.filter((element) => {
      return element.date.split('-')[0] == event.target.value;
    });
    for (let i = 0; i < listData.length; i++) {
      total += parseInt(listData[i].amount);
    }

    for (let i = 0; i < listData.length; i++) {
      listData[i].percent = listData[i].amount / total;
    }
    console.log('listData: ', listData);
    setListChart(listData);
  };

  const convertMonth = (month) => {
    switch (parseInt(month)) {
      case 1:
        return 'January';
      case 9:
        return 'September';
    }
  };

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
            <button className="button-cancel" onClick={handleCloseForm}>
              Cancel
            </button>
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
          <select value={yearFilter} onChange={handleGetYearFilter}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
        <div className="content-body">
          {/* <div className="total-amount">Total: 50000$</div> */}
          <div className="content-body__chart">
            {listChart.map((element, index) => (
              <div className="chart">
                <p>{convertMonth(element.date.split('-')[1])}</p>
                <div className="chart-percent">
                  <div
                    className="chart-bar-fill"
                    style={{ height: `${element.percent * 100}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          {listExpense.map((element, index) => {
            return (
              <div className="content-body__expense" key={index}>
                <div className="expense-left">
                  <div className="expense-time">
                    <p className="expense-time__month">
                      {convertMonth(element.date.split('-')[1])}
                    </p>
                    <p className="expense-time__year">
                      {element.date.split('-')[0]}
                    </p>
                    <p className="expense-time__day">
                      {element.date.split('-')[2]}
                    </p>
                  </div>
                  <h3 className="expense-title">{element.name}</h3>
                </div>
                <div className="expense-money">${element.amount}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

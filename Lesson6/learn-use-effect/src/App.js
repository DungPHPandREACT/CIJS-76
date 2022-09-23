import React, { useState, useEffect } from 'react';

const App = () => {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    console.log('useEffect không truyền dependencies');
  });
  // Chạy sau mỗi lần component render lại

  useEffect(() => {
    // Gọi API
    console.log('useEffect truyền dependencies là []');
  }, []);
  // Chạy lần render đầu tiên

  useEffect(() => {
    console.log('useEffect truyền dependencies là state count');
  }, [count1, count2]);
  // Chạy khi 1 trong những dependencies trong mảng thay đổi

  return (
    <div>
      <p>Count1: {count1}</p>
      <button onClick={() => setCount1(count1 + 1)}>Count1</button>

      <p>Count2: {count2}</p>
      <button onClick={() => setCount2(count2 + 1)}>Count2</button>
    </div>
  );
};

export default App;

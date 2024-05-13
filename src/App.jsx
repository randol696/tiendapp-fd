
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://tiendapp-bk.onrender.com/data')
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data);
            setData(data.results);
        });
}, []);

  return (
    <div>
    {data ? data.map((item, index) => (
      <div key={index}>
        <p>ID: {item.id}</p>
        <p>Product: {item.product}</p>
        <p>Price: {item.price}</p>
      </div>
    )) : <p>Loading...</p>}
  </div>
);
}

export default App

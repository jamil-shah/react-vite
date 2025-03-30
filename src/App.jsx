import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import jamilshah from './assets/jamil-shah.jpeg'
import './App.css'

const isLoggedIn = true;

const gadgets = [
  { id: 1, name: 'Smartphone', brand: 'Pixel', inStock: true },
  { id: 2, name: 'Smartwatch', brand: 'Apple', inStock: false },
  { id: 3, name: 'Smartphone', brand: 'Samsung', inStock: true }
];

const featured = {
  name: 'Noise Cancelling Headphone',
  brand: 'Sony',
  image: 'https://m.media-amazon.com/images/I/61eeHPRFQ9L.__AC_SX300_SY300_QL70_FMwebp_.jpg',
  price: '$328',
  width: '200px',
  height: '200px'
};

function FeaturedGadget() {
  return(
    <div>
      <h2>{featured.name} by {featured.brand}</h2>
      <p>Price: {featured.price}</p>
      <img src={featured.image} alt={featured.name}style={{width: featured.width, height: featured.height}} />
    </div>
  );
}

function GadgetList() {
  return (
    <ul>
      {gadgets.map(gadget => (
        <li key={gadget.id} style={{ color: gadget.inStock ? 'green' : 'gray' }}>
          {gadget.name} ({gadget.brand})
        </li>
      ))}
    </ul>
  );
}

function ClickCounter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      You clicked {count} times
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={jamilshah} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Jamil</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {isLoggedIn ? (
  <>
    <ClickCounter />
    <FeaturedGadget />
    <GadgetList />
  </>
) : (
  <p>Please log in to see the gadgets.</p>
)}
    </>
  )
}

export default App

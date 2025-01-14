import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const imageUrl1 = new URL('./assets/01.jpg', import.meta.url).href;
  const imageUrl2 = new URL('./assets/我會為妳加油的.jpg', import.meta.url).href;
  const list = ['什麼意思', '是又怎樣', '抱歉'];
  const urlList = list.map((item) => new URL(`./assets/${item}.jpg`, import.meta.url).href);
  return (
    <>
      <div>
        <div>
          <img style={{ width: 400, height: 'auto' }} src={imageUrl1} alt="" />
        </div>
        <div>
          <img style={{ width: 400, height: 'auto' }} src={imageUrl2} alt="" />
        </div>
        {urlList.map((url, index) => {
          return <img key={index} style={{ width: 400, height: 'auto' }} src={url} alt="" />;
        })}

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;

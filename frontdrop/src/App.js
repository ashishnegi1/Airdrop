// import logo from './N.png';
import './App.css';
import FormComponent from './Input.js';

function App() {
  return (
    <div className='container'>
      <div className='heading-container'>
        <h1 className='eye-catching-heading'>Enter your Solana wallet address to get Negicoins airdrop</h1>
      </div>
      <div className='image-container'>
        <img src='./N.png' className='fixed-size-image' alt="logo" />
      </div>
      <FormComponent/>
    </div>
  );
}

export default App;

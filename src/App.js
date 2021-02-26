import ListProduct from './components/ListProduct'
import Counter from './components/Counter'
// import ProductItem from './components/ProductItem'

import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="container">
      <div className="row-cols-4">
        <Counter />
        <ListProduct />
      </div>
    </div>
  );
}

export default App;

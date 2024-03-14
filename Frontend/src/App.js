import './App.css';
import FormCompra from './components/formCompra.js';
import Header from './components/header.js';
import Products from './components/products.js';

function App() {
  return (
    <div className="App">
      <Header/>
      {/*<Products/>*/}
      <FormCompra/>
    </div>
  );
}

export default App;

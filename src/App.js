import './App.css';
import {useState} from "react";
import GlobalStyle from "./GlobalStyle";
import Main from "./components/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Cart from './components/Cart/Cart';
import CartProvider from './state/CartProvider';

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  const handleShowCart = () => {
    setCartVisible(true)
  };

  const handleHideCart = () => {
    setCartVisible(false)
  };
  
  return (
    <CartProvider className="App">
      {cartVisible && <Cart onClose={handleHideCart}/>}
      <Header onShowCart={handleShowCart}/>
      <Main />
      <Footer />
      <GlobalStyle />
    </CartProvider> 
  );
}

export default App;

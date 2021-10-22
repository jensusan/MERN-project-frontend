import './App.css';
import GlobalStyle from "./GlobalStyle";
import Main from "./components/Main";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <GlobalStyle />
    </div>
  );
}

export default App;

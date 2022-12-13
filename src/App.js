import './style/App.css';
import Header from "./components/Header";
import Menu from "./components/Menu";
import Content from "./components/Content";


function App() {
  return (
    <div>
        <Header/>
        <div className="App-main">
            <Menu />
            <Content/>
        </div>
    </div>
  );
}

export default App;

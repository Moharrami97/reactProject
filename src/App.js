import './App.css';
import Background from './feature/header/Header';
import Main from './feature/main/Main';
import Navbar from './feature/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Background />
      <Main />
    </div>
  );
}

export default App;
import logo from './logo.svg';
import './App.css';
import Comments from './components/Comments';
import Appointments from './components/Appointments';
import MoneyManager from './components/MoneyManager';
function App() {
  return (
    <div className="App">
      <Comments/>
      <Appointments/>
      <MoneyManager/>
    </div>
  );
}

export default App;

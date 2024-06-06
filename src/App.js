import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import DarkPepi from './DarkPepi';
function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">  
      </header>
      <Routes>
        <Route path="/" element={<DarkPepi/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

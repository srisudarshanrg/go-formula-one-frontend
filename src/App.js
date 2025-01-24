import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Outlet>

        </Outlet>
      </div>
    </div>
  );
}

export default App;

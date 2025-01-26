import { Outlet } from 'react-router-dom';
import './css/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="content">
        <Outlet>

        </Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;

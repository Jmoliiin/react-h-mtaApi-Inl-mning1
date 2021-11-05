
import GetUserApi from './components/GetUserApi';
import Navbar from './components/Navbar';
import './css/style.css';

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="content shadow">
        <GetUserApi />
      </div>
      
    </div>
  );
}

export default App;

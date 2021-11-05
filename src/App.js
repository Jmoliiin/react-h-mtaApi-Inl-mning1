import './css/style.css';
import GetUserApi from './components/GetUserApi';
import Navbar from './components/Navbar';


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

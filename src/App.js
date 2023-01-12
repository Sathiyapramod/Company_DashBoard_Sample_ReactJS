import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Content from './Content';

function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
  function HomePage() {
    return (
      <div className='wrapper d-flex flex-row'>
        <Sidebar />
        <div className='content-wrapper'>
          <Navbar />
          <Dashboard />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Movies } from './movie/Movies';
import { Navbar1 } from './movie/Navbar1';
import { Navbar } from './movie/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar1/>
      <Navbar/>

  <Movies/>
    </div>
  );
}

export default App;

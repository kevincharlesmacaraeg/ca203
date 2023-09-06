import logo from './logo.svg';
import './App.css';
import Example from './hero.js';
import ApiCall from "./Apicall.js";
import Sidebar from "./Sidebar.js";
import Navbar from './Navbar.js';
import Homepage from './homepage/Homepage';
import Banner from './Banner';

function App() {
  return (
    <div className="">
      {/* <Banner /> */}
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;

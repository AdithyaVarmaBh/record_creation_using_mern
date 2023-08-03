import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes , Link} from "react-router-dom";
// import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import logo from "../src/logo.svg";

class App extends Component{
  render(){
    return(
      <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank" rel="noreferrer">
              <img src={logo} width="30" height="30" alt="Codingthesmart"/>
            </a>
            <Link to="/" className="navbar-brand">MERN_Stack Todo App</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Record List</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create List</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/edit" className="nav-link">Edit List</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Routes>
            <Route path="/" exact element={<RecordList/>}/>
            <Route path="/edit/:id" element={<Edit/>}/>
            <Route path="/create" element={<Create/>}/>
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;





// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

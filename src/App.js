import './App.css';
import './App.css';
import Header from './components/Header.js';
import {Outlet} from 'react-router-dom';

function App() {
  return (
     <div classNameName="App">
    {/* //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}
      <Header/>
      <Outlet/>
      
    </div>
  );

}

export default App;

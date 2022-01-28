
import './App.css';

import SideBar from './components/sidebar/sidebar.js';

import Home from './components/pages/Home.js';
import Events from './components/pages/Events.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (


      <div className="App">

      <BrowserRouter>

        <div className='content'>

          <div className='sidebarContainer'>
            <SideBar />
          </div>
  
          <div className='routerContainer'>
            <Routes>
              <Route path='/' element={ <Home /> } />
              <Route path='/events' element={ <Events /> } />
            </Routes>
          </div>
        </div>

      </BrowserRouter>
      </div>


  );
}

export default App;

import * as React from 'react'; 
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'toastr/build/toastr.min.css';
import Index from './components/index.component';
import Edit from './components/edit.component';
import Create from './components/create.component';
import Home from './components/home.component';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/create'} className="nav-link">Create</Link>
              </li>
              <li className="nav-item">
                <Link to={'/index'} className="nav-link">Index</Link>
              </li>
            </ul>
          </div>
        </nav> <br/>
       
        <Routes>
          <Route exact path='/create' element={ Create } />
          <Route path='/edit/:id' element={ Edit } />
          <Route path='/index' element={ Index } />
          <Route path='/' element={ Home } />
        </Routes>
      </div>
    </Router>
  );
} 

export default App;

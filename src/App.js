import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="App">
      <h2>amito vetore supto protiva niye paper bondhone thaka sorol manush</h2>
    
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;


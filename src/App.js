import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';


import Home from './Component/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Component/Navigation/Navigation';
import About from './Component/About/About';
import Services from './Component/OurSerVice/Services';
import Contact from './Component/Contact/Contact';
import SignIn from './Component/LogInSignin/SignIn';
import LogIn from './Component/LogInSignin/LogIn';
import AuthProvider from './Contex/AuthProvider';



function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
         <Route path='/service'>
            <Services></Services>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>

          </Route>
          <Route exact path='/signIn'>
            <SignIn></SignIn>
          </Route>
          <Route exact path='/login'>
            <LogIn></LogIn>
          </Route>
          
        </Switch>
     
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
        
        

       
      
    


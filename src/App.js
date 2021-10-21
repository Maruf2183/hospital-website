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
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Details from './Component/Details/Details';
import NotFound from './Component/Notfound/NotFound';
import Footer from './Component/Footer/Footer';



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
          <PrivateRoute path='/about'>
            <About></About>
          </PrivateRoute>
         <Route exact path='/service'>
            <Services></Services>
          </Route>
          <PrivateRoute path='/contact'>
            <Contact></Contact>

          </PrivateRoute>
          <Route exact path='/signIn'>
            <SignIn></SignIn>
          </Route>
          <Route exact path='/login'>
            <LogIn></LogIn>
            </Route>
            <PrivateRoute path="/service/:id">
              <Details>

              </Details>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          
        </Switch>
     <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
        
        

       
      
    


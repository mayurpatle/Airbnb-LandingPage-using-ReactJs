
import './App.css';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage'
import ReactDOM from "react-dom/client";
import { BrowserRouter as  Router ,   Routes, Route } from "react-router-dom";
import Search from './Search';
import About from './About';
import SignIn from './SignIn'
import SignUp from './SignUP';
import Forgot from './Forgot';
import Form from './utilities/Forms';
import  Checkout from  './Checkout'

function App() {
  return (
    <div className="App">
    <Router>

      <Header /> 

        <Routes> 
          <Route path="/search" element={<SearchPage />}>
          </Route>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/signin" element={<SignIn />}>
          </Route>
          <Route path="/signup" element={<SignUp />}>
          </Route>
          <Route path="/forgot" element={<Forgot />}>
          </Route>
          <Route path="/checkout" element={<Checkout />}>
          </Route>
          
          <Route path='' element={<Home />} />
          
          
          

        </Routes>
        
        
        


        
        
          

            
        
          
          { /*SearchPage */ }
           

          
        





        <Footer />
    </Router>
     


      { /* Home */  }
          {  /* Header  */ }
          {  /* Banner */ }

          {  /*Cards   */ }
          {/* Footer  */}

      { /* SeacrhPage */  }
    </div>
  );
}

export default App;

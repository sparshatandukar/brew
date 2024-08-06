
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar/NavbarComponent';
import HomeComponent from './components/home/HomeComponent';
import AboutComponent from './components/About/AboutComponent';
import RecipeComponent from './components/Recipe/RecipeComponent';
import ContactComponent from './components/Contact/ContactComponent';
import LoginComponent from './components/login/LoginComponent';
import SignupComponent from './components/Signup/SignupComponent';
import CucumberComponent from './components/Cucumber/CucumberComponent';
import TropicalComponent from './components/Tropical/TropicalComponent';
import IcedCoffeeComponent from './components/IcedCoffee/IcedCoffeeComponent';


function App() {
  return (
    <>
    <div>

    <Router>
      <div>
       <NavbarComponent/>
      </div>

      <Routes>
        <Route path='/' element={<HomeComponent/>}></Route>
        <Route path='/about' element={<AboutComponent/>}></Route>
        <Route path='/recipe' element={<RecipeComponent/>}></Route>
        <Route path='/contact' element={<ContactComponent/>}></Route>
        <Route path='/login' element={<LoginComponent/>}></Route>
        <Route path='/signup' element={<SignupComponent/>}></Route>
        <Route path='/cucumber' element={<CucumberComponent/>}></Route>
        <Route path="/tropical" element={<TropicalComponent />} />
        <Route path="/icedCoffee" element={<IcedCoffeeComponent />} />
      </Routes>
    </Router>
    </div>
    </>

  );
}

export default App;

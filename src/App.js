
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar/NavbarComponent';
import HomeComponent from './components/home/HomeComponent';
import AboutComponent from './components/About/AboutComponent';
import RecipeComponent from './components/Recipe/RecipeComponent';
import ContactComponent from './components/Contact/ContactComponent';
import LoginComponent from './components/login/LoginComponent';
import SignupComponent from './components/Signup/SignupComponent';
import CucumberComponent from './components/Pages/CucumberComponent';
import TropicalComponent from './components/Pages/TropicalComponent';
import IcedCoffeeComponent from './components/Pages/IcedCoffeeComponent';
import CoffeeComponent from './components/MultiplePage/CoffeeComponent';
import MocktailComponent from './components/MultiplePage/MocktailComponent';
import TeaComponent from './components/MultiplePage/TeaComponent';
import CocktailComponent from './components/MultiplePage/CocktailComponent';
import SmoothieComponent from './components/MultiplePage/SmoothieComponent';
import JuiceComponent from './components/MultiplePage/JuiceComponent';
import AddIngredient from './components/AddIngredient/AddIngredient';
import AddRecipe from './components/AddRecipe/AddRecipe';
import AddCategory from './components/Category/AddCategory';
import ProfileComponent from './components/Profile/ProfileComponent';

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
        <Route path='/:title/:id' element={<CucumberComponent/>}></Route>
        <Route path="/tropical" element={<TropicalComponent />} />
        <Route path="/icedCoffee" element={<IcedCoffeeComponent />} />
        <Route path="/coffee" element={<CoffeeComponent/>} />
        <Route path="/mocktails" element={<MocktailComponent/>} />
        <Route path="/cocktails" element={<CocktailComponent/>} />
        <Route path="/teas" element={<TeaComponent/>} />
        <Route path="/smoothies" element={<SmoothieComponent/>} />
        <Route path="/juices" element={<JuiceComponent/>} />
        <Route path="/addIngredient" element={<AddIngredient/>} />
        <Route path="/addRecipe" element={<AddRecipe/>} />
        <Route path="/addCategory" element={<AddCategory/>} />
        {/* <Route path="/profile" element={<ProfileComponent/>} /> */}
        


      </Routes>
    </Router>
    </div>
    </>

  );
}

export default App;

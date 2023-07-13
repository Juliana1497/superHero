import './App.css';
import Home from './Components/Dashboard'
import Header from './Components/Header';
import Footer from './Components/Footer';

//Layouts principales
function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;

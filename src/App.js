import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Cool from './Components/Cool';
function App() {
  return (
    <div className="App">
    
      <Header/>
      <Landing/>
      <Cool/>
     <Footer/>
     <Navbar/>
 
      {/* <Login/> */}
    </div>
  );
}

export default App;


import About from "./components/About";
import Contact from "./components/Contact";
import Mzbigtrades from "./components/Mzbigtrades";
import Mzfootprints from "./components/Mzfootprints";
import Mztpo from "./components/Mztpo";
import Mzvolume from "./components/Mzvolume";
import Navbar from "./components/Navbar";




function App() {
  return (
    <div className="App">

        <Navbar/>
        <Mzfootprints/>
        <Mzvolume/>
        <Mzbigtrades/>
        <Mztpo/>
        <About/>
        <Contact/>
    
    
  
    </div>
  );
}

export default App;

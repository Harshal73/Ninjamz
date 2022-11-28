
import About from "./components/About";
import Contact from "./components/Contact";
import Mzbigtrades from "./components/Mzbigtrades";
import Mzfootprints from "./components/Mzfootprints";
import Mztpo from "./components/Mztpo";
import Mzvolume from "./components/Mzvolume";
import Navbar from "./components/Navbar";
import Nsprint from "./components/Nsprint";
import Nsmacro from "./components/Nsmacro";
import Nsvwap from "./components/Nsvwap";
import Nsdelta from "./components/Nsdelta";
import Nsatr from "./components/Nsatr";
import Nseasy from "./components/Nseasy";
import Nsgoldfib from "./components/Nsgoldfib";
import Nsprofile from "./components/Nsprofile";
import Nsvmls from "./components/Nsvmls";
import Nsstop from "./components/Nsstop";


function App() {
  return (
    <div className="App">

        <Navbar/>
        <Mzfootprints/>
        <Mzvolume/>
        <Mzbigtrades/>
        <Mztpo/>
        <Nsprint/>
        <Nsmacro/>
        <Nsvwap/>
        <Nsdelta/>
        <Nsatr/>
        <Nseasy/>
        <Nsgoldfib/>
        <Nsprofile/>
        <Nsvmls/>
        <Nsstop/>
        <About/>
        <Contact/>

    
    
  
    </div>
  );
}

export default App;

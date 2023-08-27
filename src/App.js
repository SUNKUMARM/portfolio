import "./App.css";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Home />
      <div className="App">
        <div>
          <Contact />
        </div>
        <div className="pages">
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;

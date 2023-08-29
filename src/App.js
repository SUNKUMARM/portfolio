import "./App.css";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
// import Resume from "./pages/resume/Resume";

function App() {
  return (
    <div>
      {/* <Resume /> */}
      <Home />
      <div className="App">
        <div>
          <Contact />
        </div>
        <div className="pages">
          <About />
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;

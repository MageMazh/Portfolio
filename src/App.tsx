
import "./App.css";
import Hero from "./component/Hero/Hero";
import Header from "./component/Header/Header";
import About from "./component/About/About";
import Skill from "./component/Skill/Skill";
import Project from "./component/Project/Project";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <main className="bg-background text-white">
      <Header />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
      <div className="w-full text-center border-t-2 border-slate-700"></div>
      <Footer />
    </main>
  );
}

export default App;

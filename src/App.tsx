
import "./App.css";
import Hero from "./component/Hero/Hero";
import Header from "./component/Header";
import About from "./component/About/About";

function App() {
  return (
    <main className="bg-background text-white">
      <Header />
      <Hero />
      <About />
    </main>
  );
}

export default App;

import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="w-full">
      <Header />
      <main className="px-6 md:px-20">
        <Hero />
        <Projects />
        <Skills />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}

export default App;

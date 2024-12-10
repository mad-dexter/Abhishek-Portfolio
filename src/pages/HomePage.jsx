import ContactMe from "../components/ContactMe";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

function HomePage() {
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

export default HomePage;

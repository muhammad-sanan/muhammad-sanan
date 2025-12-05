import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Footer from "./components/Footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "var(--nav-height)" }}>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

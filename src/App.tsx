import "./App.css";
import {
  About,
  Contact,
  Header,
  Navbar,
  Projects,
  Skills,
  Testimonials,
} from "./components";

const App = () => {
  return (
    <main>
      <Navbar />
      <Header />
      <About Comp={About} key={"about"} />
      <Projects Comp={Projects} key={"projects"} />
      <Skills Comp={Skills} key={"skills"} />
      <Testimonials />
      <Contact Comp={Contact} key={"contact"} />
    </main>
  );
};

export default App;

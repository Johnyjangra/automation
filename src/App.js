import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PostAutomation from "./components/PostAuto";
import PreAuto from "./components/PreAuto";
import Process from "./components/Process";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      {<PreAuto />}
      <PostAutomation />
      <Process />
      <Footer />
    </>
  );
}

export default App;

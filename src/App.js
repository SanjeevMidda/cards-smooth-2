// importing all relevant modules
import "./index.css";
import Card from "./components/Card";
import { ReactLenis, useLenis } from "lenis/react";
import { motion, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

function App({ color }) {
  // creating smooth scroll using Lenis
  const lenis = useLenis(({ scroll }) => {});

  // dynmaic styling for card
  let cardStyles = {
    background: color,
  };

  // checking scroll position for the page with useScroll
  const appContainer = useRef();
  const { scrollYProgress } = useScroll({
    target: appContainer,
    offset: ["start start", "end end"],
  });

  // useEffect(() => {
  //   scrollYProgress.on("change", (e) => console.log(scrollYProgress.current));
  // }, []);
  return (
    <ReactLenis root>
      <div className="App" ref={appContainer}>
        <header>
          <h3>milk</h3>
          <h3>tray.</h3>
        </header>
        <Card text="1" index={0} progress={scrollYProgress} />
        <Card text="2" index={1} progress={scrollYProgress} />
        <Card text="3" index={2} progress={scrollYProgress} />
        <Card text="4" index={3} progress={scrollYProgress} />
        <Card text="5" index={4} progress={scrollYProgress} />
      </div>
    </ReactLenis>
  );
}

export default App;

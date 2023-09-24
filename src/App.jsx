import { useState } from "react";
import "./App.css";
import Carousels from "./Components/carousel";
import Navbar from "./Components/Navbar";
import { Box } from "@chakra-ui/react";
import Home from "./Components/Home";
import Nuka_Carousal from "./Components/Nuka_Carousal";

function App() {
  const [bg, setBg] = useState("transparent");
  const [colr, setColor] = useState("white");
  const scrollThreshold = 100;

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      setBg("white");
      setColor("black");
    } else {
      setBg("transparent");
      setColor("white");
    }
  });

  return (
    <div className="App">
      <Box
        bg={bg}
        color={colr}
        style={{
          position: "fixed",
          top: "0",
          left: "0",
          width: "100%",
          padding: "10px 0",
          zIndex: "1000",
        }}
      >
        <Navbar />
      </Box>
      <Carousels />
      <Nuka_Carousal />
      <Home />
    </div>
  );
}

export default App;

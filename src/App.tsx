import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";

type MenuState = "closed" | "open";

function App() {
  const [menuState, setMenuState] = useState<MenuState>("closed");

  const toggleMenu = () => {
    setMenuState((prev) => (prev === "closed" ? "open" : "closed"));
  };

  const closeMenu = () => {
    setMenuState("closed");
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar
          menuState={menuState}
          onMenuToggle={toggleMenu}
          onMenuClose={closeMenu}
        />

        <main className="flex-1 w-full pt-16 bg-slate-200">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

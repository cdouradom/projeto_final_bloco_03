import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import ListarCategorias from "./components/categoria/listarcategorias/ListarCategorias";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";
import ListarProdutos from "./components/produto/listarprodutos/ListarProdutos";
import FormProduto from "./components/produto/formproduto/FormProduto";
import DeletarProduto from "./components/produto/deletarproduto/DeletarProduto";
import ListarProdutosPorNome from "./components/produto/listarprodutospornome/ListarProdutoPorNome";

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

        <div className="flex-1 w-full pt-16 bg-slate-200">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produtos" element={<ListarProdutos />} />
            <Route path="/cadproduto" element={<FormProduto />} />
            <Route path="/editarproduto/:id" element={<FormProduto />} />
            <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
            <Route path="/consultarnome/:nome" element={<ListarProdutosPorNome />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

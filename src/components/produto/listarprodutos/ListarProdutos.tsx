import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";
import type Produto from "../../../models/Produto";
import { listar } from "../../../services/Service";
import CardProdutos from "../cardprodutos/CardProdutos";

function ListarProdutos() {
  const [isLoading, setIsLoading] = useState(true);
  const [produtos, setProdutos] = useState<Produto[]>([]);

  async function buscarProdutos() {
    await listar("/produtos", setProdutos);
  }

  useEffect(() => {
    setIsLoading(true);
    buscarProdutos().finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && (
        <div className="flex justify-center items-center min-h-[calc(100vh-8rem)] w-full overflow-x-hidden">
          <PacmanLoader
            color="#818CF8"
            margin={0}
            size={80}
            speedMultiplier={2}
            aria-label="Pacman-loading"
          />
        </div>
      )}

      <div className="flex justify-center w-full min-h-[calc(100vh-8rem)] overflow-x-hidden">
        <div className="box-border w-full px-4 py-4 mt-8 mb-4 max-w-8xl sm:px-6 md:px-8 lg:px-12 md:py-6">
          {!isLoading && produtos.length === 0 && (
            <div className="my-8 text-2xl text-center md:text-3xl text-slate-700 md:my-16">
              Nenhum produto foi encontrado
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6 mb-4 md:mb-0">
            {produtos.map((produto) => (
              <CardProdutos key={produto.id} produto={produto} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListarProdutos;
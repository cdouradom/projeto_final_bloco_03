import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Produto from "../../../models/Produto";
import { deletar, listar } from "../../../services/Service";
import { Trash2, X } from "lucide-react";

function DeletarProduto() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [produto, setProduto] = useState<Produto>({} as Produto);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await listar(`/produtos/${id}`, setProduto);
    } catch (error: any) {
      alert("Produto não encontrado!");
      console.error(error);
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarProduto() {
    setIsLoading(true);

    try {
      await deletar(`/produtos/${id}`);
      alert("Produto apagado com sucesso");
    } catch (error) {
      alert("Erro ao apagar o produto");
      console.error(error);
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/produtos");
  }

  return (
    <div className="container w-full max-w-md px-4 pt-4 mx-auto md:pt-6">
      <h1 className="py-4 text-3xl text-center md:text-4xl">
        Deletar Produto
      </h1>

      <p className="mb-4 text-base font-semibold text-center md:text-lg">
        Você tem certeza que deseja apagar o produto abaixo?
      </p>

      <div className="flex flex-col justify-between overflow-hidden rounded-2xl">
        {/* HEADER igual ao card */}
        <header className="px-4 py-2 text-lg font-bold text-white bg-indigo-800 md:px-6 md:text-2xl">
          Produto
        </header>

        {/* CONTEÚDO igual ao card */}
        <div className="p-4 bg-white md:p-8 h-full flex flex-col gap-3">
          <img
            src={produto.foto}
            alt={produto.nome}
            className="w-full h-48 object-cover rounded-lg mb-2"
          />
          <h3 className="text-xl font-semibold md:text-2xl">{produto.nome}</h3>
          <p className="text-lg text-indigo-800 font-bold md:text-xl">
            R$ {Number(produto.preco).toFixed(2)}
          </p>
          {produto.categoria && (
            <p className="text-sm text-gray-600 md:text-base">
              {produto.categoria.nome}
            </p>
          )}
        </div>

        {/* BOTÕES NO MESMO MODELO DO CARD */}
        <div className="flex">
          {/* Botão NÃO (voltar) */}
          <button
            onClick={retornar}
            className="w-full bg-indigo-400 hover:bg-indigo-600 text-slate-100 
                       flex items-center justify-center py-2"
          >
            <X size={22} />
          </button>

          {/* Botão SIM (deletar) */}
          <button
            onClick={deletarProduto}
            className="w-full bg-red-400 hover:bg-red-600 text-slate-100 
                       flex items-center justify-center py-2"
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              <Trash2 size={22} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;
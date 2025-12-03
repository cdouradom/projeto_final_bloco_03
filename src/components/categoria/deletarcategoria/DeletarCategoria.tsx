import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { deletar, listar } from "../../../services/Service";
import { Trash2, X } from "lucide-react";

function DeletarCategoria() {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await listar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      alert('Categoria não encontrada!');
      console.error(error);
      retornar();
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);


  async function deletarCategoria() {
    setIsLoading(true);

    try {
      await deletar(`/categorias/${id}`);
      alert('Categoria apagada com sucesso');
    } catch (error) {
      alert('Erro ao apagar a categoria');
      console.error(error);
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/categorias");
  }

  return (
    <div className="container w-full max-w-md px-4 pt-4 mx-auto md:pt-6">

      <h1 className="py-4 text-3xl text-center md:text-4xl">
        Deletar Categoria
      </h1>

      <p className="mb-4 text-base font-semibold text-center md:text-lg">
        Você tem certeza que deseja apagar a categoria abaixo?
      </p>

      <div className="flex flex-col justify-between overflow-hidden rounded-2xl">

        {/* HEADER igual ao card */}
        <header className="px-4 py-2 text-lg font-bold text-white bg-indigo-800 md:px-6 md:text-2xl">
          Categoria
        </header>

        {/* NOME igual ao card */}
        <p className="p-4 text-xl bg-white md:p-8 md:text-3xl h-full">
          {categoria.nome}
        </p>

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
            onClick={deletarCategoria}
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

export default DeletarCategoria;

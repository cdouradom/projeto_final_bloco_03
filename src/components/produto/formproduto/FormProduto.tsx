import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Produto from "../../../models/Produto";
import type Categoria from "../../../models/Categoria";
import { atualizar, cadastrar, listar } from "../../../services/Service";

function FormProduto() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [produto, setProduto] = useState<Produto>({} as Produto);

  const { id } = useParams<{ id: string }>();

  async function buscarCategorias() {
    try {
      await listar("/categorias", setCategorias);
    } catch (error) {
      alert("Erro ao buscar categorias");
      console.error(error);
    }
  }

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
    buscarCategorias();

    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setProduto({
      ...produto,
      [e.target.name]: e.target.value,
    });
  }

  function handleCategoria(e: ChangeEvent<HTMLSelectElement>) {
    const categoriaSelecionada = categorias.find(
      (cat) => cat.id === Number(e.target.value)
    );

    setProduto({
      ...produto,
      categoria: categoriaSelecionada || null,
    });
  }

  async function gerarNovoProduto(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/produtos`, produto, setProduto);
        alert("Produto atualizado com sucesso");
      } catch (error: any) {
        alert("Erro ao atualizar o produto");
        console.error(error);
      }
    } else {
      try {
        await cadastrar(`/produtos`, produto, setProduto);
        alert("Produto cadastrado com sucesso");
      } catch (error: any) {
        alert("Erro ao cadastrar o produto");
        console.error(error);
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/produtos");
  }

  return (
    <div className="container flex flex-col items-center justify-center px-2 pt-4 mx-auto">
      <h1 className="my-8 text-3xl text-center md:text-4xl">
        {id === undefined ? "Cadastrar Produto" : "Editar Produto"}
      </h1>

      <form
        className="flex flex-col w-full max-w-md gap-4 px-2 md:max-w-1/2"
        onSubmit={gerarNovoProduto}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome do Produto</label>
          <input
            type="text"
            placeholder="Nome do Produto"
            id="nome"
            name="nome"
            className="p-2 text-base bg-white border-2 rounded border-slate-700 md:text-lg"
            required
            value={produto.nome || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="preco">Preço</label>
          <input
            type="number"
            placeholder="Preço"
            id="preco"
            name="preco"
            step="0.01"
            className="p-2 text-base bg-white border-2 rounded border-slate-700 md:text-lg"
            required
            value={produto.preco || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="foto">URL da Foto</label>
          <input
            type="url"
            placeholder="URL da Foto"
            id="foto"
            name="foto"
            className="p-2 text-base bg-white border-2 rounded border-slate-700 md:text-lg"
            required
            value={produto.foto || ""}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            name="categoria"
            className="p-2 text-base bg-white border-2 rounded border-slate-700 md:text-lg"
            required
            value={produto.categoria?.id || ""}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => handleCategoria(e)}
          >
            <option value="">Selecione uma categoria</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>

        <button
          className="flex justify-center w-full py-2 mx-auto text-base rounded text-slate-100 bg-indigo-400 hover:bg-indigo-800 md:w-1/2 md:text-lg"
          type="submit"
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormProduto;
import { Link } from "react-router-dom";
import type Produto from "../../../models/Produto";
import { Pencil, Trash2 } from "lucide-react";

interface CardProdutosProps {
  produto: Produto;
}

function CardProdutos({ produto }: Readonly<CardProdutosProps>) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-indigo-800 text-white font-bold text-2xl">
        Produto
      </header>

      <div className="p-8 bg-white h-full flex flex-col gap-3">
        <img 
          src={produto.foto} 
          alt={produto.nome}
          className="w-full h-48 object-cover rounded-lg mb-2"
        />
        <h3 className="text-2xl font-semibold">{produto.nome}</h3>
        <p className="text-xl text-indigo-800 font-bold">
          R$ {Number(produto.preco).toFixed(2)}
        </p>
        {produto.categoria && (
          <p className="text-base text-gray-600">
            {produto.categoria.nome}
          </p>
        )}
      </div>

      <div className="flex gap-2 bg-indigo-800">
        <Link
          to={`/editarproduto/${produto.id}`}
          className="w-full text-slate-100 bg-indigo-800 hover:bg-indigo-600 
                     flex items-center justify-end py-2"
        >
          <Pencil size={22} />
        </Link>

        <Link
          to={`/deletarproduto/${produto.id}`}
          className="w-full text-slate-100 bg-indigo-800 hover:bg-indigo-600 
                     flex items-center justify-start py-2"
        >
          <Trash2 size={22} />
        </Link>
      </div>
    </div>
  );
}

export default CardProdutos;
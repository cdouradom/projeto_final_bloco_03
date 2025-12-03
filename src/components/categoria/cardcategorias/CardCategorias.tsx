import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { Pencil, Trash2 } from "lucide-react";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategorias({ categoria }: Readonly<CardCategoriaProps>) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-indigo-800 text-white font-bold text-2xl">
        Categoria
      </header>

      <p className="p-8 text-3xl bg-white h-full">{categoria.nome}</p>

      <div className="flex gap-2 bg-indigo-800">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          className="w-full text-slate-100 bg-indigo-800 hover:bg-indigo-600 
                     flex items-center justify-end py-2"
        >
          <Pencil size={22} />
        </Link>

        <Link
          to={`/deletarcategoria/${categoria.id}`}
          className="w-full text-slate-100 bg-indigo-800 hover:bg-indigo-600 
                     flex items-center justify-start py-2"
        >
          <Trash2 size={22} />
        </Link>
      </div>
    </div>
  );
}

export default CardCategorias;

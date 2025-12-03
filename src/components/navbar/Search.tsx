import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

function SearchForm({ className = "" }: { className?: string }) {
    const [showMessage, setShowMessage] = useState(false);
    
    const navigate = useNavigate();
    const [nome, setNome] = useState<string>("");

    function handleBuscarProdutos(e: ChangeEvent<HTMLInputElement>) {
        setNome(e.target.value);
    }

    function buscarProdutos(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        navigate(`/consultarnome/${nome}`)
            setNome('');
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000);
    }

    return (
        <>
            {/* Mensagem de desenvolvimento
            {showMessage && (
                <div className="fixed z-50 transition-all duration-300 transform -translate-x-1/2 top-24 left-1/2">
                    <div className="px-6 py-4 text-white bg-indigo-600 rounded-lg shadow-xl">
                        <p className="font-semibold">🚧 Em desenvolvimento</p>
                    </div>
                </div>
            )} */}

            <form 
                className={`relative flex items-center w-full ${className}`}
                onSubmit={buscarProdutos}
            >
                <div className="relative w-full flex items-center">
                    <input 
                        className="w-full h-10 pl-4 pr-12 text-black bg-white rounded-lg shadow-sm
                                 border-2 border-transparent
                                 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20
                                 placeholder:text-slate-400
                                 transition-all duration-200"
                        type="search"
                        placeholder="Buscar produto..."
                        id="busca"
                        name="busca"
                        value={nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleBuscarProdutos(e)}
                    />
                    <button 
                        type="submit" 
                        className="absolute right-1 h-8 w-8 rounded-md
                                 bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                                 text-white 
                                 flex items-center justify-center
                                 transition-all duration-200
                                 hover:scale-105 active:scale-95
                                 shadow-sm hover:shadow-md"
                        aria-label="Buscar"
                    >
                        <MagnifyingGlassIcon size={18} weight="bold"/>
                    </button>
                </div>
            </form>
        </>
    );
}

export default SearchForm;
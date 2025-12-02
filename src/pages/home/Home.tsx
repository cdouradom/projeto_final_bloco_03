import { useState } from "react";
import imagemHome from "../../assets/home.webp"

function Home() {
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000);
    };

    return (
        <>
            {/* Mensagem de desenvolvimento */}
            {showMessage && (
                <div className="fixed z-50 transition-all duration-300 transform -translate-x-1/2 top-24 left-1/2">
                    <div className="px-6 py-4 text-white bg-indigo-600 rounded-lg shadow-xl">
                        <p className="font-semibold">🚧 Em desenvolvimento</p>
                    </div>
                </div>
            )}

            <div className="bg-cyan-50 flex justify-center min-h-[80vh] pt-20">
                <div className="container grid items-center grid-cols-1 gap-8 px-4 py-12 mx-auto text-slate-800 lg:grid-cols-2 md:px-6">

                    {/* Coluna de texto */}
                    <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
                        <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                            Seja bem-vinde!
                        </h2>

                        <p className="text-lg md:text-xl text-slate-600">
                            Aqui você encontra Medicamentos e Cosméticos!
                        </p>
                        
                        <button
                            type="button"
                            onClick={handleClick}
                            className="px-8 py-4 mt-4 text-lg font-semibold text-white transition-all duration-200 transform bg-indigo-800 rounded-lg shadow-md hover:bg-indigo-600 active:bg-indigo-700 hover:shadow-xl hover:scale-105 active:scale-95"
                        >
                            Cadastrar Produto
                        </button>
                    </div>

                    {/* Coluna da imagem */}
                    <div className="flex justify-center lg:justify-end">
                        <img
                            src={imagemHome}
                            alt="Ilustração de medicamentos e cosméticos"
                            className="w-full max-w-md transition-transform duration-300 md:max-w-lg hover:scale-105"
                        />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home
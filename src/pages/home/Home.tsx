import { Link } from "react-router-dom";
import imagemHome from "../../assets/home.webp";

function Home() {
    return (
        <>
            <div className="bg-cyan-100 flex justify-center min-h-[80vh] pt-20">
                <div className="container grid items-center grid-cols-1 gap-8 px-4 py-12 mx-auto text-slate-800 lg:grid-cols-2 md:px-6">

                    {/* Coluna de texto */}
                    <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
                        <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                            Seja bem-vinde!
                        </h2>

                        <p className="text-lg md:text-xl text-slate-600">
                            Aqui você encontra Medicamentos e Cosméticos!
                        </p>
                        
                        <Link
                            to="/cadproduto"
                            className="px-8 py-4 mt-4 text-lg font-semibold text-white transition-all duration-200 transform bg-indigo-800 rounded-lg shadow-md 
                                    hover:bg-indigo-600 active:bg-indigo-700 hover:shadow-xl hover:scale-105 active:scale-95"
                        >
                            Cadastrar Produto
                        </Link>
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
    );
}

export default Home;
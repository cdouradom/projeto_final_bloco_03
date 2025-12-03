import { ListIcon, ShoppingCartIcon, UserIcon, XIcon } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./Search";
import imagemLogo from '../../assets/logo.webp'

/** 
 * Tipo para controlar o estado do Menu Mobile
 */
type MenuState = 'closed' | 'open';

/** 
 * Tipagem das props do componente Navbar
 */
interface NavbarProps {
  menuState: MenuState;
  onMenuToggle: () => void;
  onMenuClose: () => void;
}

function Navbar({ menuState, onMenuToggle, onMenuClose }: Readonly<NavbarProps>) {
    const menuRef = useRef<HTMLDivElement>(null);
    
    // Fecha o menu com a tecla ESC
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && menuState === 'open') {
                onMenuClose();
            }
        };
        
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [menuState, onMenuClose]);
    
    // Previne scroll quando menu mobile está aberto
    useEffect(() => {
        if (menuState === 'open') {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuState]);

    return (
        <>
            {/* Navbar fixa no topo */}
            <nav className='fixed top-0 left-0 z-50 flex justify-center w-full py-4 text-white bg-indigo-800 shadow-md md:py-2'>
                <div className="container flex items-center justify-between px-4 mx-auto mt-2 text-lg md:px-6">
                    
                    {/* Logo */}
                    <Link to='/home' className="flex-shrink-0" aria-label="Ir para página inicial">
                        <img
                            src={imagemLogo}
                            alt="Logo Farmácia Generation"
                            className="w-32 md:w-40"
                        />
                    </Link>

                    {/* Barra de busca - Desktop/Tablet */}
                    <div className="relative flex items-center justify-center flex-1 max-w-2xl px-4 text-black max-md:hidden">
                        <SearchForm />
                    </div>

                    {/* Menu Desktop/Tablet */}
                    <div className='items-center hidden gap-6 py-4 md:flex'>
                        <Link to='/produtos' className='transition-colors hover:text-indigo-200'>
                            Produtos
                        </Link>
                        <Link to='/categorias' className='transition-colors hover:text-indigo-200'>
                            Categorias
                        </Link>
                        <Link to='/cadcategoria' className='transition-colors hover:text-indigo-200'>
                            Cadastrar Categoria
                        </Link>
                        <Link to='/perfil' className='transition-transform hover:scale-110' aria-label="Perfil">
                            <UserIcon size={32} weight='bold' />
                        </Link>
                        <Link to='/carrinho' className='transition-transform hover:scale-110' aria-label="Carrinho">
                            <ShoppingCartIcon size={32} weight='bold' />
                        </Link>
                    </div>

                    {/* Botão Menu Mobile */}
                    {menuState === 'closed' && (
                        <button 
                            className="p-2 transition-transform md:hidden hover:scale-110" 
                            onClick={onMenuToggle} 
                            aria-label="Abrir menu"
                            aria-expanded="false"
                        >
                            <ListIcon size={32} weight="bold" />
                        </button>
                    )}
                </div>
            </nav>

            {/* Menu Mobile */}
            {menuState === 'open' && (
                <>
                    {/* Overlay escuro */}
                    <div 
                        className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
                        onClick={onMenuClose}
                        aria-hidden="true"
                    />
                    
                    {/* Painel do menu */}
                    <div 
                        ref={menuRef}
                        className="fixed top-0 right-0 z-50 w-full h-full overflow-y-auto transition-transform duration-300 ease-in-out bg-slate-800 md:hidden sm:w-80"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Menu de navegação"
                    >
                        <div className="flex flex-col h-full p-6 text-lg text-white">
                            
                            {/* Header do menu */}
                            <div className="flex items-center justify-between mb-8">
                                <img
                                    src={imagemLogo}
                                    alt="Logo Farmácia Generation"
                                    className="w-32"
                                />
                                <button
                                    type="button"
                                    aria-label="Fechar menu"
                                    className="p-2 transition-colors rounded-full hover:bg-slate-700"
                                    onClick={onMenuClose}
                                >
                                    <XIcon size={32} weight="bold" />
                                </button>
                            </div>
                            
                            {/* Barra de busca mobile */}
                            <div className="mb-6">
                                <SearchForm />
                            </div>
                            
                            {/* Links de navegação */}
                            <nav className="flex flex-col gap-1">
                                <Link 
                                    to='/home' 
                                    onClick={onMenuClose} 
                                    className="px-4 py-3 transition-colors rounded-lg hover:bg-slate-700"
                                >
                                    Home
                                </Link>
                                <Link 
                                    to='/produtos' 
                                    onClick={onMenuClose} 
                                    className="px-4 py-3 transition-colors rounded-lg hover:bg-slate-700"
                                >
                                    Produtos
                                </Link>
                                <Link 
                                    to='/cadproduto' 
                                    onClick={onMenuClose} 
                                    className="px-4 py-3 transition-colors rounded-lg hover:bg-slate-700"
                                >
                                    Cadastrar Produto
                                </Link>
                                <Link 
                                    to='/categorias' 
                                    onClick={onMenuClose} 
                                    className="px-4 py-3 transition-colors rounded-lg hover:bg-slate-700"
                                >
                                    Categorias
                                </Link>
                                <Link 
                                    to='/cadcategoria' 
                                    onClick={onMenuClose} 
                                    className="px-4 py-3 transition-colors rounded-lg hover:bg-slate-700"
                                >
                                    Cadastrar Categoria
                                </Link>
                            </nav>
                            
                            {/* Divider */}
                            <div className="my-6 border-t border-slate-600" />
                            
                            {/* Ícones de usuário e carrinho */}
                            <div className='flex gap-6'>
                                <Link 
                                    to='/perfil' 
                                    onClick={onMenuClose}
                                    className="transition-transform hover:scale-110"
                                    aria-label="Perfil"
                                >
                                    <UserIcon size={32} weight='bold' />
                                </Link>
                                <Link 
                                    to='/carrinho' 
                                    onClick={onMenuClose}
                                    className="transition-transform hover:scale-110"
                                    aria-label="Carrinho"
                                >
                                    <ShoppingCartIcon size={32} weight='bold' />                        
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Navbar
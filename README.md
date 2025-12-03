# 🏥 Farmácia Generation

Sistema de gerenciamento de produtos farmacêuticos e cosméticos desenvolvido com React + TypeScript + Vite.

## 📋 Sobre o Projeto

Aplicação web para gerenciar um catálogo de produtos de farmácia, permitindo cadastro, edição, listagem e exclusão de produtos e categorias.

## ✨ Funcionalidades

- 🏠 **Home**: Página inicial com apresentação do sistema
- 📦 **Produtos**: 
  - Listagem de produtos com imagem, preço e categoria
  - Cadastro de novos produtos
  - Edição de produtos existentes
  - Exclusão de produtos
- 🏷️ **Categorias**:
  - Listagem de categorias
  - Cadastro de novas categorias
  - Edição de categorias existentes
  - Exclusão de categorias
- 🔍 **Busca**: Sistema de busca de produtos (em desenvolvimento)

## 🚀 Tecnologias

- **React 18** - Biblioteca para construção de interfaces
- **TypeScript** - Superset JavaScript com tipagem estática
- **Vite** - Build tool e dev server
- **React Router DOM** - Roteamento da aplicação
- **Axios** - Cliente HTTP para requisições à API
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Ícones modernos
- **Phosphor Icons** - Biblioteca adicional de ícones
- **React Spinners** - Componentes de loading

## 📁 Estrutura do Projeto

```
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes React
│   ├── categorias/  # Componentes de categorias
│   │   ├── cardcategorias/
│   │   ├── deletarcategorias/
│   │   ├── formcategoria/
│   │   └── listarcategorias/
│   ├── produtos/    # Componentes de produtos
│   │   ├── cardprodutos/
│   │   ├── deletarproduto/
│   │   ├── formproduto/
│   │   └── listarprodutos/
│   ├── footer/      # Rodapé
│   ├── navbar/      # Barra de navegação
│   └── search/      # Busca
├── models/          # Interfaces TypeScript
│   ├── Categoria.ts
│   └── Produto.ts
├── pages/           # Páginas da aplicação
│   └── home/
├── services/        # Serviços e API
│   └── Service.ts
└── App.tsx          # Componente principal
```

## 🔧 Instalação

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd projeto-farmacia
```

2. Instale as dependências:

```bash
npm install
```

3. Configure a URL da API no arquivo `src/services/Service.ts`:

```typescript
const api = axios.create({
  baseURL: "http://localhost:8080", // Altere para sua API
});
```

4. Execute o projeto:

```bash
npm run dev
```

5. Acesse no navegador:

```
http://localhost:5173
```

## 📦 Scripts Disponíveis

```bash
npm run dev          # Inicia o servidor de desenvolvimento
npm run build        # Cria build de produção
npm run preview      # Preview do build de produção
npm run lint         # Executa o linter
```

## 🌐 API Backend

O projeto consome uma API REST com os seguintes endpoints:

### Produtos

- `GET /produtos` - Lista todos os produtos
- `GET /produtos/{id}` - Busca produto por ID
- `POST /produtos` - Cadastra novo produto
- `PUT /produtos` - Atualiza produto
- `DELETE /produtos/{id}` - Deleta produto

### Categorias

- `GET /categorias` - Lista todas as categorias
- `GET /categorias/{id}` - Busca categoria por ID
- `POST /categorias` - Cadastra nova categoria
- `PUT /categorias` - Atualiza categoria
- `DELETE /categorias/{id}` - Deleta categoria

## 📊 Modelos de Dados

### Produto

```typescript
interface Produto {
    id: number;
    nome: string;
    preco: number;
    foto: string;
    categoria: Categoria | null;
}
```

### Categoria

```typescript
interface Categoria {
    id: number;
    nome: string;
}
```

## 🎨 Recursos Visuais

- Design responsivo para mobile, tablet e desktop
- Animações suaves de hover e transições
- Loading states com spinners animados
- Feedback visual para ações do usuário
- Tema de cores baseado em índigo e ciano

## 🔄 Próximas Funcionalidades

- [ ] Sistema de busca funcional
- [ ] Filtros por categoria
- [ ] Ordenação de produtos (preço, nome)
- [ ] Paginação
- [ ] Sistema de autenticação
- [ ] Carrinho de compras

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais.

## 👨‍💻 Autor

Desenvolvido durante o bootcamp da Generation Brasil - by Cintia Dourado

---

⚡ Powered by Vite + React + TypeScript
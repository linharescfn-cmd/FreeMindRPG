# Projeto Integrador - FreeMindRPG

Aplicação web em Node.js com Express e Handlebars para catálogo e divulgação de obras de RPG.

## Visão Geral

Este projeto utiliza arquitetura MVP no backend para separar responsabilidades em:

- **Model**: acesso/manipulação de dados (`products`)
- **Presenter**: construção dos dados enviados para as views
- **Controller**: orquestra regras de fluxo e renderização
- **View**: páginas Handlebars e estilos CSS

## Tecnologias

- Node.js
- Express
- Express Handlebars
- Nodemon (desenvolvimento)

## Pré-requisitos

- Node.js 18+ (recomendado)
- npm (instalado com o Node.js)

## Instalação

1. Clone ou baixe o projeto
2. No diretório raiz, instale as dependências:

```bash
npm install
```

## Como Executar

### Desenvolvimento (com reload automático)

```bash
npm run dev
```

### Produção/local simples

```bash
npm start
```

Servidor padrão:

- `http://localhost:3000`

## Scripts Disponíveis

- `npm start` -> inicia com Node.js
- `npm run dev` -> inicia com Nodemon
- `npm test` -> placeholder (ainda não há suíte de testes)

## Estrutura de Pastas

```text
projeto-integrador/
├── index.js
├── package.json
├── src/
│   ├── app.js
│   ├── controllers/
│   │   └── pageController.js
│   ├── models/
│   │   └── productModel.js
│   ├── presenters/
│   │   └── pagePresenter.js
│   └── routes/
│       └── pageRoutes.js
├── public/
│   ├── css/
│   │   └── styles.css
│   └── img/
└── views/
		├── layouts/
		│   └── main.handlebars
		├── home.handlebars
		├── catalogo.handlebars
		├── product.handlebars
		├── como-ganhar.handlebars
		├── publique.handlebars
		├── cadastro.handlebars
		└── suporte.handlebars
```

## Arquitetura MVP (Backend)

### Model

- Arquivo: `src/models/productModel.js`
- Responsável por disponibilizar os produtos em memória:
	- `getAllProducts()`
	- `getProductById(id)`

### Presenter

- Arquivo: `src/presenters/pagePresenter.js`
- Responsável por padronizar o `view model` enviado para as views:
	- títulos de página (`pageTitle`)
	- dados auxiliares (`products`, `product`, `errorMessage`)

### Controller

- Arquivo: `src/controllers/pageController.js`
- Responsável por:
	- chamar Model
	- usar Presenter
	- renderizar as views
	- retornar 404 no detalhe de produto inexistente

### Rotas

- Arquivo: `src/routes/pageRoutes.js`

Endpoints atuais:

- `GET /` -> home
- `GET /catalogo` -> catálogo
- `GET /product/:id` -> detalhe do produto
- `GET /cadastro` -> cadastro
- `GET /publique` -> publicação de obra
- `GET /como-ganhar` -> página informativa
- `GET /suporte` -> contato/suporte

## Fluxo de Inicialização

1. `index.js` inicia o servidor na porta `3000`
2. `src/app.js` configura Express, Handlebars, `static` e rotas
3. As rotas chamam controllers que usam model + presenter

## Estado Atual do Projeto

- Backend em MVP funcional
- Renderização de páginas funcionando
- Catálogo e detalhe de produto funcionando
- Tratamento de produto inexistente com resposta `404`
- Formulários presentes nas views, mas sem persistência (apenas frontend)

## Limitações Conhecidas

- Dados dos produtos estão em memória (sem banco de dados)
- Não há autenticação/autorização
- Não há testes automatizados
- Não há validação server-side dos formulários

## Próximos Passos Recomendados

1. Criar camada de serviço e repositório para persistência em banco
2. Adicionar validação backend para formulários
3. Incluir testes (unitários para Model/Presenter e integração para rotas)
4. Melhorar acessibilidade e semântica HTML em alguns templates
5. Configurar variáveis de ambiente (porta, modo, etc.)

## Guia Rápido de Manutenção

- **Adicionar página nova**:
	1. Criar view em `views/`
	2. Criar presenter correspondente
	3. Criar action no controller
	4. Registrar rota em `src/routes/pageRoutes.js`

- **Adicionar produto**:
	- Editar array em `src/models/productModel.js`

- **Alterar layout global**:
	- Ajustar `views/layouts/main.handlebars`

- **Alterar aparência**:
	- Ajustar `public/css/styles.css`

## Licença

ISC
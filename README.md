<img width="1653" height="909" alt="georgegraciosa github io_" src="https://github.com/user-attachments/assets/2cab96ef-c3c0-4eec-8859-57b3dfa7cc0f" />

---

## Portfólio Dinâmico | George Graciosa

Este é o meu portfólio pessoal, desenvolvido para centralizar meus projetos e demonstrar minhas habilidades técnicas em desenvolvimento **Full-Stack (Front-end e Node.js)**. 

O diferencial deste projeto é a **automação**: em vez de atualizar o HTML manualmente, desenvolvi uma **API própria em Node.js** que consome a API do GitHub e alimenta o site em tempo real.

### Tecnologias Utilizadas

**Front-end:**
* **HTML5 & CSS3:** Semântica, layouts modernos e animações.
* **JavaScript (ES6+):** Manipulação de DOM, Programação Orientada a Objetos (Classes) e Consumo de APIs Assíncronas.
* **Design Responsivo:** Adaptado para Mobile, Tablet e Desktop.

**Back-end (API):**
* **Node.js & TypeScript:** Robustez e tipagem no lado do servidor.
* **Express:** Gerenciamento de rotas e middlewares (CORS).
* **GitHub API:** Integração direta para busca de repositórios.

---

### Destaques do Projeto

* **Arquitetura Escalável:** O Front-end foi construído em módulos (Mobile, Projetos, Fetch), facilitando a manutenção.
* **API Customizada:** O Back-end filtra automaticamente meus projetos favoritos através de um array de controle, entregando um JSON pronto para o consumo do Front.
* **Experiência do Usuário (UX):** Slide interativo com efeito de profundidade e lógica de centralização dinâmica.
* **Deploy Automatizado:** Hospedado no **Render** (Back-end) e integrado ao fluxo de CI/CD do GitHub.

---

### Estrutura de Pastas

* `/src`: Código fonte do Back-end em TypeScript.
* `/dist`: Código compilado em JavaScript para produção.
* `/js`: Módulos de comportamento do Front-end.
* `/style`: Estilização modularizada com CSS.

---

### Como rodar o projeto localmente

1. Clone o repositório.
2. No diretório da API, rode `npm install` para as dependências.
3. Use `npm run dev` para iniciar o ambiente de desenvolvimento.
4. Abra o `index.html` do portfólio via Live Server.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import '../src/styles.css';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
); 
/**
 * 
 *
// 1. Crie um novo aplicativo React.
// 2. Crie um componente App.jsx.
// 3. Crie um componente Header.jsx que renderiza um elemento <header>
// para mostrar o nome do aplicativo em um <h1>.
// 4. Crie um componente Footer.jsx que renderiza um elemento <footer>
// para mostrar uma mensagem de copyright em um <p> com um ano atualizado dinamicamente.
// 5. Crie um componente Note.jsx para mostrar um elemento <div> com um
// <h1> para um título> e um <p> para o conteúdo.

// SUGESTÃO: Você precisará estudar as classes no arquivo ter styles.css para um estilo adequado.
 */
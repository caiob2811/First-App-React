import React from "react"; 

export default function Footer() {
    const d = new Date()
    const year = d.getFullYear()

    return (
        <footer>
            <p>Copyright © {year} - Todos os direitos reservados </p>
        </footer>
    )
}
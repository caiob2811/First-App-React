import React from "react";
import Header from "./Header";
import '../src/styles.css'
import Note from "./Note";
import Footer from "./Footer";


export default function App () {
    return (
        <div>
            <Header />
            <Note />
            <Footer />
        </div>
    )
}

import React from "react";
import Header from "./Header";
import '../src/styles.css'
import Note from "./Note";
import notations from "./notations";
import Footer from "./Footer";

/* function createNotationsComponent(notations) { /* lembrar sempre de quando usar o map colocar o key (id), para facilitar o entendimento e identificação 
    return (
        <Note key= {notations.id} 
        title={notations.title}
            content={notations.content}
        />  
    )
}  */

export default function App () {
    return (
        <div>
            <h1>
            <Header />
            {notations.map((notations) => {
                return (
                    <Note key= {notations.id} 
                    title={notations.title}
                    content={notations.content}
                />  
                )  
            })}
            <Footer />
            </h1>
        </div>
    )
}


/* {notations.map( function createNotationsComponent(notations) { outro jeito
    return (
        <Note key= {notations.id} 
        title={notations.title}
            content={notations.content}
        />  
    )
}  
*/
import { useState } from "react";

const from = () => {
    // Estados
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    // FUNÇÃO PARA EVITAR O COMPORTAMENTO PADRÃO DO FORMULÁRIO (DE RECARREGAR PÁGINA AO ENVIAR)
    const handleSubmit = (event) => {
        event.preventDefault() // recebe evento e evita o comportamento padrão do formulário

        // Aqui iria o código para enviar os dados para o back-end
        console.log(name, email)
    }



    return(
        <>
        <h1>Formulário de Cadastro</h1>
        <br />
        <form action="onSubmit">
            <input type="text" 
            placeholder="Digite seu nome"
            onChange={(event) => setName(e.target.value)}
            />
            <br />
            <input type="email" 
            placeholder="Digite seu email"/>
            onChange={(event) => setEmail(e.target.value)}
            <br /><br />
            <button type="submit">Cadastrar</button>
            <br /><br />
            {/* Exibindo os estados */}
            {name}<br />
            {email}   
        </form>
        </>
    );
};

export default Form;
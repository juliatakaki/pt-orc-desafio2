import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Nome1p.css"

function Nome1p() {
    const navigate = useNavigate()

    const [simboloJogador, setSimboloJogador] = useState("")
    const [nomeJogador, setNomeJogador] = useState("")

    function NomeSubmit(e){
        if(simboloJogador ===""){
            alert("escolha um simbolo")
            return}
        if(nomeJogador ===""){
            alert("escolha um nome")
            return}

        localStorage.setItem(`player${simboloJogador}`, nomeJogador)
        localStorage.setItem("escolhaJogador",simboloJogador)

        if(simboloJogador === "x"){
            localStorage.setItem("playero", "Computador")
            localStorage.setItem("escolhaComputador", "o")
            
        }else{
            localStorage.setItem("playerx", "Computador")
            localStorage.setItem("escolhaComputador", "x")
        }
        navigate("/singleplayer")

    }

    return (
        <body id="bodyNome1p">

            <label>
            Nome do Jogador: 
            <input type='text' name='nome' placeholder='Digite seu nome' onChange={(e)=>{setNomeJogador(e.target.value)}}/>
            </label>

            <div className="container_Simbolos" >
                <button onClick={()=> setSimboloJogador('x')} >Escolher X </button>
                <button onClick={()=> setSimboloJogador('o')} >Escolher O </button>
            </div>
                {simboloJogador? 
                <p>Simbolo escolhido {simboloJogador}</p>
                :<p></p>
                }
            <button onClick={NomeSubmit}>Enviar</button>
        </body>
        
    )
}

export default Nome1p;
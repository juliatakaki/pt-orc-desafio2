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
            <div className="interface">
                <button className="voltar" onClick={()=>{navigate("/home")}}> &lt;</button>
                <div className="caixa">
                    <div className="titulo">
                        <p id="h1">Modo um jogador</p>
                    </div>

                    <div className="nome">
                        <p id="h2">Nome do Jogador:</p> 
                        <input id="imp" type='text' name='nome' maxLength={16} autoComplete="off" placeholder='Digite seu nome' onChange={(e)=>{setNomeJogador(e.target.value)}}/>
                    </div>

                    <div className="container_Simbolos" >
                        {simboloJogador?
                        <p id="h3">Simbolo escolhido {simboloJogador}</p>
                        :<p id="h3">Escolha seu símbolo!</p>
                        }
                        <button className="butt" onClick={()=> setSimboloJogador('x')} >Escolher X </button>
                        <button className="butt" onClick={()=> setSimboloJogador('o')} >Escolher O </button>
                       
                        
                    </div>

                    <div className="div_buttonJogar">
                        <button className="butt" onClick={NomeSubmit}>Jogar</button>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Nome1p;
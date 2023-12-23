import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nomes2p.css"

function Nomes2p() {
    const navigate = useNavigate()

    const[nomeX, setNomeX] = useState("")
    const[nomeO, setNomeO] = useState("")

    const iniciarGame = ()=>{
        if(nomeX === "" || nomeO ===""){
            alert("Escolha um nome para os dois jogadores")
            return
        }
        localStorage.setItem("playerx",nomeX)
        localStorage.setItem("playero",nomeO)
        navigate("/multiplayer")
    }

    return ( 
        <body className="bodyNomes2p">
            <div className="interface">
                <button className="voltar" onClick={()=>{navigate("/home")}}> &lt;</button>
                
                <div className="caixa">
                    <div className="titulo">
                        <p id="h1">Modo dois jogadores</p>
                    </div>

                    <div className="container_Nomes">
                        <div className="div_Nomes">
                            <p id="h2">jogador X</p>
                            <input id="imp" type="text" maxLength={16} autoComplete="off" placeholder="Escolha um nome para o jogador X" onChange={(e)=>{setNomeX(e.target.value)}} ></input>
                        </div>
                        
                        <div className="div_Nomes">
                            <p id="h2">Jogador O</p>
                            <input id="imp" type="text" maxLength={16} autoComplete="off" placeholder="Escolha um nome para o jogador O" onChange={(e)=>{setNomeO(e.target.value)}} ></input>
                        </div>
                    </div>
                    <div className="div_buttonJogar"> 
                        <button className="butt" onClick={iniciarGame}>jogar</button>
                    </div>
                </div>
            </div>
        </body>
     );
}

export default Nomes2p;
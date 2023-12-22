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
            <div className="container_Nomes">
                <div className="div_Nomes">
                    <label>Escolha um nome para o jogador X:</label>
                    <input type="text" onChange={(e)=>{setNomeX(e.target.value)}} placeholder="Digite um nome"></input>
                </div>
                <div className="div_Nomes">
                    <label>Escolha um nome para o jogador O:</label>
                    <input type="text" onChange={(e)=>{setNomeO(e.target.value)}} placeholder="Digite um nome" ></input>
                </div>
            </div>
            <div className="div_buttonJogar"> 
                <button onClick={iniciarGame}>jogar</button>
            </div>
        </body>
     );
}

export default Nomes2p;
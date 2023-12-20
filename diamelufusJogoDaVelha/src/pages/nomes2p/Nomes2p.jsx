import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nomes2p.css"

function Nomes2p() {
    const navegate = useNavigate()

    const[nomeX, setNomeX] = useState("")
    const[nomeO, setNomeO] = useState("")

    const iniciarGame = ()=>{
        if(nomeX === "" || nomeO ===""){
            alert("Escolha um nome para os dois jogadores")
            return
        }
        localStorage.setItem("playerx",nomeX)
        localStorage.setItem("playero",nomeO)
        navegate("/game")
    }

    return ( 
        <body className="bodyNomes2p">
            <div className="container_Nomes">
                <div className="div_Nomes">
                    <h1>Escolha um nome para o jogador X:</h1>
                    <input type="text" onChange={(e)=>{setNomeX(e.target.value)}} ></input>
                </div>
                <div className="div_Nomes">
                    <h1>Escolha um nome para o jogador O:</h1>
                    <input type="text" onChange={(e)=>{setNomeO(e.target.value)}} ></input>
                </div>
            </div>
            <div className="div_buttonJogar"> 
                <button onClick={iniciarGame}>jogar</button>
            </div>
        </body>
     );
}

export default Nomes2p;
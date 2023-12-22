import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home(){
    const navigate = useNavigate()

    localStorage.setItem("x",0)//Pontos do jogador x
    localStorage.setItem("o",0)//Pontos do jogador o
    localStorage.setItem("playerx","Player X")//Nome do jogador x
    localStorage.setItem("playero","Player O")//Nome do jogador x
    localStorage.setItem("escolhaJogador","x")//Simbolo escolhido pelo jogador no modo singleplayer
    localStorage.setItem("escolhaComputador","o")//Simbolo escolhido pelo jogador no modo singleplayer
    
    return(
        <>
        <body id='bodyHome'>
            <h1>Jogo da velha</h1>
            <div className="Container_Buttons_Home" >
                <button onClick={()=>{navigate("/nomes2p")}}>2 jogadores</button>
                <button onClick={()=>{navigate("/nome1p")}}>1 Jogador</button>
            </div>
        </body>
        </>
    )
}
export default Home
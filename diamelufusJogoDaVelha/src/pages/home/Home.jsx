import { useNavigate } from 'react-router-dom'
import './Home.css'
import xImage from './images/x.png';
import OImage from './images/0.png';

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
            <div className="flex">
                <img id='img' src={xImage} alt="" />
                <img id='img' src={OImage} alt="" />
            </div>
            <p id = 'h1'>Jogo da velha</p>
            <div className="flex">
            <button className='butt' onClick={()=>{navigate("/nome1p")}}>Um jogador</button>
            <button className='butt' onClick={()=>{navigate("/nomes2p")}}>Dois jogadores</button>
            </div>
        </body>
        </>
    )
}
export default Home

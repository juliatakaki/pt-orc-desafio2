import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home(){
    const navegate = useNavigate()
    localStorage.setItem("x",0)
    localStorage.setItem("o",0)

    return(
        <>
        <body id='bodyHome'>
            <h1>Jogo da velha</h1>
            <button onClick={()=>{navegate("/nomes2p")}}>jogar</button>
        </body>
        </>
    )
}
export default Home
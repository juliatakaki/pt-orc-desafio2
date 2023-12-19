import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Game.css'

function Game() {
  const navegate  = useNavigate()
  const pontosPlayer1 = parseInt(localStorage.getItem("x"))
  const pontosPlayer2 = parseInt(localStorage.getItem("o"))
  
  const[player, setPlayer] = useState("x")

  const[valorCel1, setValorCel1] = useState("")
  const[valorCel2, setValorCel2] = useState("")
  const[valorCel3, setValorCel3] = useState("")
  const[valorCel4, setValorCel4] = useState("")
  const[valorCel5, setValorCel5] = useState("")
  const[valorCel6, setValorCel6] = useState("")
  const[valorCel7, setValorCel7] = useState("")
  const[valorCel8, setValorCel8] = useState("")
  const[valorCel9, setValorCel9] = useState("")

  const[vitoria, setVitoria] = useState(false)
  
  const[resultado, setResultado]=useState("")

  const click = (setValorCel, valor)=>{
    if(vitoria){return}
    if(valor !==""){return}
    setValorCel(player)
    setPlayer(player==="x"?"o":"x")
    
    
  }

  const ganhou =(valor)=>{
    setVitoria(true)
    let pontosAtuais = parseInt(localStorage.getItem(valor))
    let winner = `player${valor}`
    setResultado(`${localStorage.getItem(winner)} ganhou`)
    localStorage.setItem(valor,pontosAtuais+1)

  }

  const restart = ()=>{
    setPlayer("x")
    setValorCel1("")
    setValorCel2("")
    setValorCel3("")
    setValorCel4("")
    setValorCel5("")
    setValorCel6("")
    setValorCel7("")
    setValorCel8("")
    setValorCel9("")
    setVitoria(false)
    setResultado("")
  }

  const zerarPlacar = ()=>{
    localStorage.setItem("x",0)
    localStorage.setItem("o",0)
    restart()
  }


useEffect(()=>{
  valorCel1 == valorCel2 && valorCel2 == valorCel3 && valorCel3 !="" ?ganhou(valorCel1): 
  valorCel4 == valorCel5 && valorCel5 == valorCel6 && valorCel6 !="" ?ganhou(valorCel4):
  valorCel7 == valorCel8 && valorCel8 == valorCel9 && valorCel9 !="" ?ganhou(valorCel7):

  valorCel1 == valorCel4 && valorCel4 == valorCel7 && valorCel7 !="" ?ganhou(valorCel1):
  valorCel2 == valorCel5 && valorCel5 == valorCel8 && valorCel8 !="" ?ganhou(valorCel2):
  valorCel3 == valorCel6 && valorCel6 == valorCel9 && valorCel9 !="" ?ganhou(valorCel3):

  valorCel3 == valorCel5 && valorCel5 == valorCel7 && valorCel7 !="" ?ganhou(valorCel3):
  valorCel1 == valorCel5 && valorCel5 == valorCel9 && valorCel9 !="" ?ganhou(valorCel1):


  valorCel1 !="" && valorCel2 !="" && valorCel3 !="" &&
  valorCel4 !="" && valorCel5 !="" && valorCel6 !="" && 
  valorCel7 !="" && valorCel8 !="" && valorCel9 !="" ? setResultado("Empate"):{}
},[valorCel1, valorCel2, valorCel3, valorCel4, valorCel5, valorCel6, valorCel7, valorCel8, valorCel9])

 
  return (
    <> 
    <body id='bodyGame'>
      
      <div>
        <h1>{localStorage.getItem("playerx")} : {pontosPlayer1} pts</h1>
      </div>

      <div className='containerGame'>
        <button onClick={()=>{navegate('/')}}>voltar</button>

        {resultado?
        <h1>{resultado}</h1>:
        <h1>Vez do jogador {localStorage.getItem(`player${player}`)}</h1>
        }
        <div className='game'>
          <button onClick={(e)=>{click(setValorCel1,valorCel1)}}>{valorCel1}</button>
          <button onClick={(e)=>{click(setValorCel2,valorCel2)}}>{valorCel2}</button>
          <button onClick={(e)=>{click(setValorCel3,valorCel3)}}>{valorCel3}</button>
          <button onClick={(e)=>{click(setValorCel4,valorCel4)}}>{valorCel4}</button>
          <button onClick={(e)=>{click(setValorCel5,valorCel5)}}>{valorCel5}</button>
          <button onClick={(e)=>{click(setValorCel6,valorCel6)}}>{valorCel6}</button>
          <button onClick={(e)=>{click(setValorCel7,valorCel7)}}>{valorCel7}</button>
          <button onClick={(e)=>{click(setValorCel8,valorCel8)}}>{valorCel8}</button>
          <button onClick={(e)=>{click(setValorCel9,valorCel9)}}>{valorCel9}</button>
        </div> 
        <div className='containerReset'>
          <button onClick={restart}>Recomeçar</button>
          <button onClick={zerarPlacar}>zerar placar</button>
        </div>
      </div>
      <div>
        <h1>{localStorage.getItem("playero")} : {pontosPlayer2} pts</h1>
      </div>
    </body>
    </>

  )
}

export default Game

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './SinglePlayer.css'
import '../../components/board/index'
import Board from '../../components/board/index'

const [simboloJogador, setSimboloJogador] = useState(null)
function escolhaJogador (simbolo){

    setSimboloJogador(simbolo)

}

const [nomeJogador, setNomeJogador] = useState('')
function NomeSubmit(e){

    e.preventDefault()
    setNomeJogador(e.target.name.value)
}

return (
<>
    
    <div>

        <form onSubmit={NomeSubmit}>
            <label>
            Nome do Jogador:
            <input type='text' name='nome' placeholder='Digite seu nome' />
            </label>
            <button type='submit'>Enviar</button>
        </form>

    </div>
    
    <div>
        
        <button onClick={()=> escolhaJogador ('X')} >Escolher X </button>
        <button onClick={()=> escolhaJogador ('O')} >Escolher O </button>

    </div>

</>

)
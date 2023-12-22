import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Board.css"

/*
Esse componenente é responsavel por toda a lógica do jogo
tanto no modo Multiplayer quanto no modo singleplayer*/

function Board(props) {
  const navigate  = useNavigate()

//Constantes referentes aos jogadores. Todas contidas no localStorage e inicializadas nos arquivos Home, Nome1p e Nomes2p
  const pontosPlayerX = parseInt(localStorage.getItem("x"))
  const pontosPlayerO = parseInt(localStorage.getItem("o"))
  const nomePlayerX = localStorage.getItem("playerx")
  const nomePlayerO = localStorage.getItem("playero")
  const escolhaJogador = localStorage.getItem("escolhaJogador")
  const escolhaComputador = localStorage.getItem("escolhaComputador")

  const[player, setPlayer] = useState("x")//Player atual
  const[board, setBoard] = useState(Array(9).fill(""))//Tabuleiro do jogo
  const[vitoria, setVitoria] = useState(false)
  const[resultado, setResultado]=useState("")

//As constantes modo_de_jogo e botConfig são as responsáveis por diferenciar o modo de jogo, são definidas pelo props do componente
  const modos_de_Jogo = (index)=>{
    props.game === "Singleplayer"?jogadaJogador(index):jogada(index)
  }
  const botConfig = ()=>{
    props.game === "Singleplayer"? jogadaCoputador() : null
  }


/*Função principal do jogo. é a responsavel por mudar o simbolo da célula selecionada e alternar entre os jogadores.
  No modo Multiplayer apenas essa função é utilizada.
*/
    const jogada = (index) => {
    if (vitoria){return null}
    if (board[index] !== "") {return null;}
    const newBoard = [...board];
    newBoard[index] = player;
    setBoard(newBoard);
    setPlayer(player === "x" ? "o" : "x");
  }


//As funções jogadaComputador e jogadaJogador são utilizadas apenas no modo singleplayer e ambas chamam a função jogada

/*A lógica das jogadas do computador é bem simples, primeiro ele checa se pode jogar(condicionais de vitoria e escolhaComputador).
  Depois é criado um Array contendo o index de cada célula vazia do board e armazenado na variável emptyBoard,
  depois é escolhido aleatoriamente uma célula contida no emptyBoard 
  e por fim a função jogada é chamada passando a célula escolhida aletóriamente 
*/ 
  const jogadaCoputador = ()=>{
      if(vitoria){return}
      if(escolhaComputador !== player){return}
      let emptyBoard = board.map((valor, index) => (valor === "" ? index : null)).filter((valor) => valor !== null);
      let jogadaRandom = emptyBoard[parseInt(Math.random()*emptyBoard.length)]
      setTimeout(() => {
          jogada(jogadaRandom)
      }, 500);

  }

//A função jogadaJogador apenas checa se está na vez do jogador e depois chama a função jogada
  const jogadaJogador =(index)=>{
      if(escolhaJogador === player){
          jogada(index)
          
      }
  }


/*
Função responsável por encerrar o jogo, setanto vitoria = true, 
também adiciona 1 ponto ao vencedor e muda o valor de resultado para o jogador que venceu*/
  const ganhou =(valor)=>{
      setVitoria(true)
      let pontosAtuais = parseInt(localStorage.getItem(valor))
      let winner = `player${valor}`
      localStorage.setItem(valor,pontosAtuais+1)
      setResultado(`${localStorage.getItem(winner)} ganhou`)
  }

  
/*
  Esse hook é utilizado para checar se as condições de vitorias aconteceram se sim chama a função ganhou.
  Caso nenhuma nenhuma condilçai de vitória tenha acontecido checa se ouve empate, se todas as células estão cheias.
  E caso não acontenteu uma vítoria ou um empate nos utilizamos a constante botConfig para definir a próxima jogada.
  Se estivermos no modo Singleplayer botConfig() = jogadaComputador(), so for no Multiplayer botConfig = null

  Esse hook é acionado sempre que o board mudar ou o player, ou seja quando a página é renderizada pela primeira vez
  e depois só roda após uma jogada, caso a jogada tenha sido do Jogadador (Modo singleplayer) a lógica de botConfig entra em ação
  fazendo assim a função jogadaComputador() sempre acontecer após a jogada do Jogadador.
*/
  useEffect(() => {
      board[0] == board[1] && board[1] == board[2] && board[2] !="" ?ganhou(board[1]): 
      board[3] == board[4] && board[4] == board[5] && board[5] !="" ?ganhou(board[3]):
      board[6] == board[7] && board[7] == board[8] && board[8] !="" ?ganhou(board[6]):
  
      board[0] == board[3] && board[3] == board[6] && board[6] !="" ?ganhou(board[0]):
      board[1] == board[4] && board[4] == board[7] && board[7] !="" ?ganhou(board[1]):
      board[2] == board[5] && board[5] == board[8] && board[8] !="" ?ganhou(board[2]):
      
      board[2] == board[4] && board[4] == board[6] && board[6] !="" ?ganhou(board[2]):
      board[0] == board[4] && board[4] == board[8] && board[8] !="" ?ganhou(board[0]):
      
      
      board[0] !="" && board[1] !="" && board[2] !="" &&
      board[3] !="" && board[4] !="" && board[5] !="" && 
      board[6] !="" && board[7] !="" && board[8] !="" ? setResultado("Empate"):botConfig()
  }, [board, player]);


//Função que recomeça o jogo, setando todas as variáveis para seus valores originais
  const restart = ()=>{
  setPlayer("x")
  setBoard(Array(9).fill(""))
  setVitoria(false)
  setResultado("")
  }

  const zerarPlacar = ()=>{
  localStorage.setItem("x",0)
  localStorage.setItem("o",0)
  restart()
  }




/*
Dentro do elementos da página é importante dar um destaque para os butões na div 'game'. 
Todos esse botões estão utilizam uma função modo_de_jogo que foi instanciada no inicio desse arquivo.
Essa função modo_de_jogo alterna a implementação dependendo do modo de jogo,
caso esteja no modo Singleplayer modo_de_jogo(index) = jogadaJogador(index) 
e caso esteja no modo Multiplayer modo_de_jogo(index) = jogada(index)

Isso acontece pois no modo Multiplayer não é necessário fazer a checagem se está na vez de um player, já que são 2 players jogando.
*/
  return (
  <> 
      <body id="bodyGame">
      
          
          <div>
              <h1>{nomePlayerX} : {pontosPlayerX} pts</h1>
          </div>

          <div className='containerGame'>
              <button className="botao" onClick={()=>{navigate("/")}}>voltar</button>
              {resultado?
              <h1>{resultado}</h1>:
              <h1>Vez do jogador {localStorage.getItem(`player${player}`)}</h1>
              }
              <div className='game'>
                  <button onClick={()=>{modos_de_Jogo(0)}}>{board[0]}</button>
                  <button onClick={()=>{modos_de_Jogo(1)}}>{board[1]}</button>
                  <button onClick={()=>{modos_de_Jogo(2)}}>{board[2]}</button>
                  <button onClick={()=>{modos_de_Jogo(3)}}>{board[3]}</button>
                  <button onClick={()=>{modos_de_Jogo(4)}}>{board[4]}</button>
                  <button onClick={()=>{modos_de_Jogo(5)}}>{board[5]}</button>
                  <button onClick={()=>{modos_de_Jogo(6)}}>{board[6]}</button>
                  <button onClick={()=>{modos_de_Jogo(7)}}>{board[7]}</button>
                  <button onClick={()=>{modos_de_Jogo(8)}}>{board[8]}</button>
              </div> 
              <div className='containerReset'>
                  <button id="restart" className="botao" onClick={restart}>Recomeçar</button>
                  <button id="zerar" className="botao" onClick={zerarPlacar}>zerar placar</button>
              </div>
          </div>


          <div>
              <h1>{nomePlayerO} : {pontosPlayerO} pts</h1>
          </div>


      </body>
  </>
      )
}

export default Board
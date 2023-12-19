export default function Board(){
    const[valorCel1, setValorCel1] = useState("")
    const[valorCel2, setValorCel2] = useState("")
    const[valorCel3, setValorCel3] = useState("")
    const[valorCel4, setValorCel4] = useState("")
    const[valorCel5, setValorCel5] = useState("")
    const[valorCel6, setValorCel6] = useState("")
    const[valorCel7, setValorCel7] = useState("")
    const[valorCel8, setValorCel8] = useState("")
    const[valorCel9, setValorCel9] = useState("")

    const click = (setValorCel, valor)=>{
        if(vitoria){return}
        if(valor !==""){return}
        setValorCel(player)
        setPlayer(player==="x"?"o":"x")
         
      }

    return(
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
    )
  
}
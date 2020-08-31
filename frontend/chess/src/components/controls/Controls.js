import React,{useState} from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'
function Controls(props) {
    const [status,setStatus] = useState(true)
    const play = () =>{
        props.toggleGame()
        setStatus(!status)
    }
   const pause = () =>{
        props.pauseGame()
        setStatus(!status)
   }
       
   
    return (
        <div>
            {status?  <button onClick={play}>play</button> : <button onClick={pause}>pause</button>}
           
            <button>next</button>
            <button>reset</button>
        </div>
    )
}
const mapStateToProps = (state) => ({
    match:state.chessData.match
})
const actionCreator = {
    toggleGame:actions.chessData.toggleGame,
    pauseGame:actions.chessData.pauseGame
}
export default connect(mapStateToProps, actionCreator)(Controls)

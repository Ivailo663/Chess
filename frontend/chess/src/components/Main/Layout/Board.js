import React,{useState} from 'react'
import { connect } from 'react-redux'
import Chessboard from 'chessboardjsx'

function Board(props) {
  
    // const manageMoves = () =>{
    //     if(props.paused){
    //         return props.currentMove
    //     }else{
            
    //     }
    // }
    return (
        <Chessboard position={props.currentMove }  draggable={false}/>
    )
}

const mapStateToProps = (state) => ({
    match:state.chessData.match,
    currentMove:state.chessData.currentMove,
    hasGameStarted:state.chessData.hasGameStarted,
    gamePaused:state.chessData.gamePaused
})

const actionCreator = {
    
}

export default connect(mapStateToProps, actionCreator)(Board)

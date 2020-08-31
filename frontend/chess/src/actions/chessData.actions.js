import {constants} from '../constants'
import axios from 'axios'

const fetch = () =>{
    return axios.get("http://localhost:8080/games")
    .then(res=>res.data)
    .catch(err=>console.log(err))
}
const getChessData = () =>{
    const getDataRequest = () =>{
        return{
            type:constants.GET_DATA_REQUEST
        }
    }
    const getDataSuccess = (data) =>{
        console.log(data)
        return{
            type:constants.GET_DATA_SUCCESS,
            payload:data
        }
    }
    const getDataFailure = (err) =>{
        return{
            type:constants.GET_DATA_FAILURE,
            payload:err
        }
    }
    return dispatch => {
        dispatch(getDataRequest())
        fetch().then(data => (dispatch(getDataSuccess(data)))).catch(err=>dispatch(getDataFailure(err)))
    }
}

const collectSingleMatch = (match) => {
    return {
        type:constants.COLLECT_SINGLE_MATCH,
        payload:match
    } 
}

const toggleGame = () =>{   
    const loopThroughAllMoves = (move) =>{
        
        return{
            type:constants.GRAB_CURRENT_MOVE,
            payload:move,
        }
    }
    return (dispatch,getState) =>{
        const match = getState().chessData.match
        const gamePaused = getState().chessData.gamePaused
        let index;
        let moves = match.fens
        let length = moves.length
        let currentMove = "";



        if(!gamePaused){
            
            for (let i = 0; i <= length; i++){   
                
                index = i
                setTimeout( ()=> {   
                    currentMove = moves[i]
                    dispatch(loopThroughAllMoves(currentMove))
                 }, i*1200)  
        }
        }else{
            console.log("KUUUUUUUUUUR")
            dispatch({type:constants.GRAB_CURRENT_MOVE,payload:moves[index]})
        }
   
        dispatch({type:constants.START_GAME})  
    }
}

const pauseGame = () =>{
    // console.log("pause")
    return{
        type:constants.PAUSE_GAME
    }
}

export const chessData = {
    getChessData,
    collectSingleMatch,
    toggleGame,
    pauseGame
}
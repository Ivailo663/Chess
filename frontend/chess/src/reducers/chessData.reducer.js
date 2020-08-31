import {constants} from '../constants'


const intialState = {
  data:[],
  currentMove:"",
  hasGameStarted:false,
  gamePaused:false
  };
  
  const chessData = (state = intialState, action) => {
    switch (action.type) {
      case constants.GET_DATA_SUCCESS:
        return {
          ...state,
          data:action.payload
        };
      case constants.COLLECT_SINGLE_MATCH:
        return{
          ...state,
          match:action.payload
        }
      case constants.GRAB_CURRENT_MOVE:
        return{
          ...state,
          currentMove:action.payload,
          // index:action.index
         
        }
      case constants.START_GAME:
        return{
          ...state,
          hasGameStarted: !state.hasGameStarted,
          gamePaused:!state.gamePaused
        }
      case constants.PAUSE_GAME:
        // console.log("pause")
        return{
          ...state,
          gamePaused:true
        }
      default: {
        return state;
      }
    }
  };
  
  export default chessData;
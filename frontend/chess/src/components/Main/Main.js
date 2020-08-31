import React from 'react'
import { connect } from 'react-redux'
import GameInfo from './Layout/GameInfo'
import Moves from './Layout/Moves'
import Board from './Layout/Board'

const  Main = (props) => {
    return (
        <div>
            <GameInfo/>
            <Moves/>
            <Board/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const actionCreator ={}

export default connect(mapStateToProps, actionCreator)(Main)

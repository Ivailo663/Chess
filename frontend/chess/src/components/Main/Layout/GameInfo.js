import React,{useEffect} from 'react'
import { connect } from 'react-redux'

const GameInfo = (props) => {
    console.log(props.userId)
    return (
        <header className="opponents">
            {props.data && (
                <div className="opponents-holder">
                    <p>{props.userId}</p>
                    <p>vs</p>
                    {/* <p>{props.data[props.userId].black}</p> */}

                </div>
                )
            }

        </header>
    )
}

const mapStateToProps = (state) => ({
    data:state.chessData.data,
})

const actionCreator = {
    
}

export default connect(mapStateToProps, actionCreator)(GameInfo)

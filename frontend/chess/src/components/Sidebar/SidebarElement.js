import React from 'react'
import {connect} from 'react-redux'
import actions from '../../actions'


const SidebarElement = (props) => {
    return (
 
            props.data.map((el,index)=>(

                    <div className="opponents-holder" key={index} onClick={()=> props.collectSingleMatch(el)}>
                        <p>{el.white}</p> 
                        <p>vs</p>
                        <p>{el.black}</p>
                    </div>
            ))

    )
}
const mapStateToProps = state =>{
    return{
        data:state.chessData.data
    }
}

const actionCreator = {
    collectSingleMatch: actions.chessData.collectSingleMatch
}

export default connect(mapStateToProps,actionCreator)(SidebarElement)

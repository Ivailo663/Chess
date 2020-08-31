import React, { useState, useEffect } from 'react';
import './App.css';
import {connect} from 'react-redux'
import actions from './actions'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Main'
import Controls from './components/controls/Controls'


function App(props) {

  useEffect(() => {
    props.getData()
  });
  return (
    <div className="app">
    <Sidebar/>
      <Main/>
      <Controls/>
    </div>
  );
}
const mapStateToProps = (state) =>{
  return{

  }
}
const actionCreator = {
  getData: actions.chessData.getChessData
}
export default connect(mapStateToProps,actionCreator)(App);

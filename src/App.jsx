import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContainerDialogs from './components/Dialogs/ContainerDialogs';
import ContainerUsers from './components/FindUsers/ContainerUsers';
import ContainerProfile from './components/Profile/Myposts/Post/ContainerProfile';
import ConteeinerHeader from './components/Header/ConteeinerHeader';
import Login from './components/Login/Login';
import React from 'react';
import { connect } from 'react-redux';
import { HeaderTh } from './Redux/header-reducer';
import { InitialSucsses } from './Redux/app-reduser';
import Preloader from './components/common/Preloader/Preloader';




class App extends React.Component {
  
  componentDidMount(){
    this.props.InitialSucsses()
  }

  render() {

    if(!this.props.initialized){
     return <Preloader/>
    }
    return (
      <Router>
        <div className="app-wrapper">
          <ConteeinerHeader />
          <Nav />
          <div className='app-wrapper-content'>
            <Routes>
              <Route path='/profile/:userId' element={<ContainerProfile />} />
              <Route path='dialogs/*' element={<ContainerDialogs />} />
              <Route path='users' element={<ContainerUsers />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    initialized: state.app.initialized
  }
}


export default connect(mapStateToProps, {InitialSucsses})(App);

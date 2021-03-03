import React, { Component, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';

// LAZY 

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

//

class App extends Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized)
      return <Preloader />

    return (
      <div className='app-page'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Suspense fallback={<Preloader/>}>
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
            <Route path='/login' render={() => <Login />} />
          </Suspense>
        </div>
        <Footer />
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const MainApp = (props) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </Provider>
  )
}

export default MainApp;
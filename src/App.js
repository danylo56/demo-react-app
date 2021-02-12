import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Route, withRouter } from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './redux/app_reducer';
import { compose } from 'redux';
import Preloader from './components/Common/Preloader/Preloader';

class App extends React.Component {

    componentDidMount = () => {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        

        return (
            <div className='app-wrapper'>
                <HeaderContainer />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route render={() => <DialogsContainer />} path="/dialogs" />
                    <Route
                        render={() => <ProfileContainer />}
                        path="/profile/:userId?" />
                    <Route component={Music} path="/music" />
                    <Route component={News} path="/news" />
                    <Route component={Settings} path="/settings" />
                    <Route render={() => <UsersContainer />} path="/users" />
                    <Route component={Login} path="/login" />
                </div>

                {/* <Profile/> */}
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
})

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp })
)(App);
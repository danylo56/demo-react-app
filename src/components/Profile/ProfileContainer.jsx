import React from 'react';
import Profile from './Profile';
import {getUserProfile, getStatus, updateStatus } from '../../redux/profile_reducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/AuthRedirect/AuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount = () => {

        let userId = this.props.match.params.userId;
        if (!userId){
            userId = this.props.authorizedUserId;
            if (!userId){
                this.props.history.push('login');
            }
        }
        this.props.setUserProfile(userId);
        this.props.getStatus(userId)
    }

    render() {
        return <Profile {...this.props}/>;
    }
}

// let mapStateToPropsForRedirect = (state) => ({
//     isAuth: state.auth.isAuth,
// })




let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent)



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
})


export default compose(
    connect(mapStateToProps, {setUserProfile: getUserProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer)
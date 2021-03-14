import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export const withAuthRedirect = (Component) => {
    let RedirectComponent =  (props) => {
        if (!props.isAuth) return <Redirect to="/login"/>
        return <Component {...props} />
    }

    let mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
    })

    return connect(mapStateToProps)(RedirectComponent)
}


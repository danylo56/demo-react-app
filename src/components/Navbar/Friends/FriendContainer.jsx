import React from 'react';
import { connect } from 'react-redux';
import StoreContext from '../../../StoreContext';
import Friends from './Friends';


let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;
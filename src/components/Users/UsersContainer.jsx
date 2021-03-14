import React from "react";
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    toggleFollowingProgress,
    requestUsers
} from "../../redux/users_reducer";
import Users from "./Users";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/AuthRedirect/AuthRedirect";
import {
    getUserSuper as getUsersSelector,
    getTotalUsersCount,
    getPageSize,
    getCurrentPage,
    getIsFetching,
    getFollowingProgress
} from "../../redux/users-selector";


class UsersContainer extends React.Component {

    componentDidMount = () => {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);

    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(this.props.currentPage, this.props.pageNumber)

    }


    render = () => {

        let props = this.props;
        return (
            <Users
                {...props}
                onPageChanged={this.onPageChanged}/>
        );
    };
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingProgress(state),
    }
}


export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        setUsers,
        toggleFollowingProgress,
        getUsers: requestUsers
    }),
    withAuthRedirect
)(UsersContainer);
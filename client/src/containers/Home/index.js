/* -- React, Redux -- */
import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

/* -- Styles --  */
import styles from './index.css';

/* -- Actions --  */
import { fetchUser } from '../../actions/index';

/* -- Components --  */
import UsersTable from "../../components/UsersTable";
import FetchUsersButton from '../../components/FetchButton';

class Home extends Component {

    constructor(props) {
        super(props);
        this.onButtonUserClick = this.onButtonUserClick.bind(this);
    }


    onButtonUserClick(){
        this.props.fetchUser();
    }

    render() {
        const users = this.props.users ? this.props.users : [];

        return (
                <div className={styles.home}>
                    <FetchUsersButton
                        fetchUsers={this.onButtonUserClick}/>
                    <UsersTable
                        users={users}/>
                </div>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchUser }, dispatch);
}

function mapStateToProps({ users }) {
    return { users };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

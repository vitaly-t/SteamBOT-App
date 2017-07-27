import React, { Component } from 'react';
import {Table, TableHeader, TableRow, TableRowColumn, TableHeaderColumn, TableBody} from 'material-ui/Table';

import styles from './index.css';

export default class UsersTable extends Component{

    constructor(props){
            super(props);
            this.renderUsersTable = this.renderUsersTable.bind(this);
    }

    renderUsersTable() {
        return this.props.users.map(user => {
            return (
                    <TableRow key={user.steam_id_64}>
                        <TableRowColumn>{user.steam_id_64}</TableRowColumn>
                        <TableRowColumn>Yes</TableRowColumn>
                    </TableRow>
            );
        });
    }

    render(){
        return(
            <div className={styles.usersTable}>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>
                                    <strong>SteamID</strong>
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                    <strong>Invited</strong>
                            </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        { this.props.users.length > 0 ? this.renderUsersTable() : null}
                    </TableBody>
                </Table>


            </div>
        )};
}




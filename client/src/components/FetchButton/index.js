import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    display: 'inline-block',
    height: '25px',
    width: '150px',
    textAlign: 'center',
    background: '#f6f6f6',
};

const FetchUsersButton = (props) => (
    <div>
        <RaisedButton
            style={styles}
            label="Fetch Users"
            primary={true}
            onClick={props.fetchUsers}/>
    </div>
);

export default FetchUsersButton;
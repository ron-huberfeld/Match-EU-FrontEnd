import React, { useState, useEffect } from 'react';
import { Jumbotron } from 'reactstrap';
import UsersServices from '../services/UsersServices';

const UsersList = () => {
    const [users, setUsers] = useState([]);

    const retrieveUsers = () => {
        UsersServices.getAll()
            .then((response) => {
                setUsers(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        retrieveUsers();
    }, []);

    return (
        <Jumbotron id="users" className="primary-bg">
            <div className="container">
                <div className="list row">
                    <div className="col-md-6">
                        <h4>Users List</h4>

                        <ul className="list-group">
                            {users &&
                                users.map((user, index) => (
                                    <li key={index}>{user.email}</li>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Jumbotron>
    );
};

export default UsersList;

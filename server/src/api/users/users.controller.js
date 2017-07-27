import UserService from './users.service';

export default class UsersController {

    static getAll(req, res) {
        UserService
            .getUsersAndGroups()
            .then( users => res.status(200).json(users))
            .catch( error => res.status(400).json(error));
    }

    static getDistinctUsers(req, res){
        UserService
            .getDistinctUsersIds()
            .then( users => res.status(200).json(users))
            .catch( error => res.status(400).json(error));
    }
}
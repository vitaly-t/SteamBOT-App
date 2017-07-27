import GroupService from './groups.service';

export default class GroupsController {

    static create(req, res){
        GroupService
            .create(req.body)
            .then( () => res.status(200).json("Saved OK"))
            .catch( error => res.status(400).json(error));
    }

    static getAll(req, res) {
        GroupService
            .getAll()
            .then( groups => res.status(200).json(groups))
            .catch( error => res.status(400).json(error));
    }

    static processCSGOGroups(req, res){
        GroupService
            .processCSGOGroupsAndUsers(req.body.group)
            .then( () => res.status(200).end())
            .catch( error => res.status(400).send(error));

    }


}


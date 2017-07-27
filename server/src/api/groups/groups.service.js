import GroupsDao from './groups.dao';
import UsersService from '../users/users.service';

import csgoApi from '../csgo/csgo.service';
import xmltojson from '../../utils/xmltojson';


export default class GroupsService{

    static create(group){
        return GroupsDao.save(group);
    }

    static getAll(){
        return GroupsDao.all();
    }

    static async processCSGOGroupsAndUsers (groupName)  {

        try{
            const csgoApiData = await csgoApi(groupName);

            const parsedData = await xmltojson(csgoApiData);

            const csgoGroup = {
                id: parsedData.memberList.groupID64,
                name: parsedData.memberList.groupDetails.groupName,
                siteUrl: parsedData.memberList.groupDetails.groupURL
            };

            const groupId = await GroupsDao.save(csgoGroup);

            if(!groupId)
                await UsersService.processCSGOUsers(csgoGroup.id, parsedData);

        }catch (err){
            return err;
        }

    }

}



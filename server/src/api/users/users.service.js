import UsersDao from '../users/users.dao';

export default class UserService{

    static async processCSGOUsers (groupId, parsedData) {

            let steamIdsArr = [];

            const usersSteamIds = parsedData.memberList.members.steamID64;

            Object.keys(usersSteamIds).forEach(key => {
                steamIdsArr.push({
                    steam_group_id_64: groupId,
                    steam_id_64: usersSteamIds[key]
                });
            });

            return UsersDao.saveUsers(steamIdsArr);
    }

    static getUsersAndGroups(){
        return UsersDao.all();
    }

    static getDistinctUsersIds(){
        return UsersDao.selectDistinct();
    }

}



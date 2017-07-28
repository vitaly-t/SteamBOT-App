import sql from './sql/index';
import db from '../../config/database';

const helpers = db.$config.pgp.helpers;
const cs = new helpers.ColumnSet([{name: 'steam_id', def: 0}, 'steam_group_id_64', 'steam_id_64', {table: 'csgo_users'});

export default class UserDao {

    static all() {
        return db.any(sql.select);
    }
    static selectDistinct(){
        return db.any(sql.selectDistinct);
    }

    static save(user) {
        return db.none(sql.create, [user.groupid, user.steamid, user.steamid64]);
    }

    static selectUsersByGroupId(groupId){
        return db.any(sql.selectByGroupId, [groupId]);
    }

    static saveUsers(users) {
        return db.task('create-users', t => {
            const query = helpers.insert(users, cs);
            return t.none(query);
        });
    }


}

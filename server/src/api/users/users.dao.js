import sql from './sql/index';
import db from '../../config/database';

const helpers = db.$config.pgp.helpers;
const cs = new helpers.ColumnSet([{name: 'steam_id', def: 0},
                                {name: 'steam_group_id_64', prop: 'steam_group_id_64'},
                                {name: 'steam_id_64', prop: 'steam_id_64'}],
                                {table: {table:'csgo_users', schema:'public'}});

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
        return db.task(t => {
            const query = helpers.insert(users, cs);
            return t.none(query);
        });
    }


}

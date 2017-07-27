import sql from './sql/index';
import db from '../../config/database';

export default class GroupsDao {

    static all() {
        return db.any(sql.select);
    }

    static save(group) {
        return db.task(t => {
            return t.oneOrNone(sql.selectByGroupId, group.id, g => g && g.steam_group_id_64)
                .then(groupId => {
                    return groupId || t.none(sql.create, [group.id, group.name, group.siteUrl]);
                });
        });
    }

    static selectByGroupId(idGroup){
        return db.any(sql.selectByGroupId, [idGroup]);
    }

}

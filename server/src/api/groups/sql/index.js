import query from '../../../config/sql';

const sql = {
    create: query('../api/groups/sql/add.sql'),
    select: query('../api/groups/sql/select.sql'),
    selectByGroupId: query('../api/groups/sql/selectByGroupId.sql')
};

export default sql;
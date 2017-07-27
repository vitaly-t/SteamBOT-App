import query from '../../../config/sql';

const sql = {
    create: query('../api/users/sql/add.sql'),
    select: query('../api/users/sql/select.sql'),
    selectByUserId: query('../api/users/sql/selectByUserId.sql'),
    selectDistinct: query('../api/users/sql/selectDistinct.sql')
};

export default sql;
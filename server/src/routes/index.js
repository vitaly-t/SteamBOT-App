
import { GroupsRoutes } from '../api/groups/groups.routes';
import { UsersRoutes } from '../api/users/users.routes';

export class Routes {

    static init(app, router) {

        GroupsRoutes.init(router);

        UsersRoutes.init(router);

        app.use('/', router);
    }
}

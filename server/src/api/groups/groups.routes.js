import GroupsController from './groups.controller'

export class GroupsRoutes {

    static init(router){
        router
            .route('/api/saveGroup')
            .post(GroupsController.create);

        router
            .route('/api/groups')
            .get(GroupsController.getAll);

        router
            .route('/api/scrapGroups')
            .post(GroupsController.processCSGOGroups);
    }
}
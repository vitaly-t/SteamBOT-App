import UsersController from './users.controller';

export class UsersRoutes {

    static init(router){
        router
            .route('/api/users/getAll')
            .get(UsersController.getAll);

        router
            .route('/api/users')
            .get(UsersController.getDistinctUsers);
    }
}
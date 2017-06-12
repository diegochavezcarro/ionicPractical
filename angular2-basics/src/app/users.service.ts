export class UsersService {
    private registeredUsers: any = ['Diego', 'Marcelo', 'Chavez'];
    getUsers(){
        return this.registeredUsers;
    }
}
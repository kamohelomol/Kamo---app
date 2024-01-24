import userData from '../data/userdata'
class AuthService {

    users = [
        { id: 1, username: 'user1' , password: 'password1'},
        { id: 2, username: 'user2' , password: 'password2'}, 

    ];

      // check if user exists 
    getUser( username, password) {
        return this.users.find( user => user.username === username && user.password === password);
    }

    // register new user 
    registerUser ( username ,password) {
     const newUser = { id: this.users.length + 1, username, password};
     this.users.push(newUser);
     return newUser;
     console.log({newUser});
    }

}


export default new AuthService();

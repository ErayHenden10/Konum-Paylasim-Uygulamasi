class AuthService {
    static users = [];
  
    static createUser(firstName, lastName, username, password) {
      const newUser = {
        id: Date.now().toString(),
        firstName,
        lastName,
        username,
        password,
      };
      this.users.push(newUser);
      return newUser;
    }
  
    static loginUser(username, password) {
      const user = this.users.find(
        (u) => u.username === username && u.password === password
      );
      return user;
    }
  }
  
  export default AuthService;
  
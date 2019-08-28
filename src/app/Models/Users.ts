export class Users {
  Username: string;
  Password: string;
  RoleID: number;
  Description: string;
  constructor(username, password, roleID, description) {
    this.Username = username;
    this.Password = password;
    this.RoleID = roleID;
    this.Description = description;
  }
}

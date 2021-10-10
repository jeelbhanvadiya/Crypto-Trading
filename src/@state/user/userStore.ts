import { action, makeAutoObservable } from "mobx";

export interface IUserStore {
  userName: string;
  firstName: string;
  email: string;
  lastName: string;
}

export class UserStore implements IUserStore {
  userName = "";
  firstName = "";
  lastName = "";
  email = "";

  constructor() {
    makeAutoObservable(this);
  }

  @action setUser = (userData: any): void => {
    this.userName = userData.userName;
    this.firstName = userData.firstName;
    this.lastName = userData.lastName;
    this.email = userData.email;
  };

}

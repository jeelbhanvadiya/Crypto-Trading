import { makeAutoObservable } from "mobx";
import { UserStore } from "../@state/user/userStore";

class AppState {
  user: UserStore;

  constructor() {
    makeAutoObservable(this);
    this.user = new UserStore();
  }
}

const app = new AppState();
export default app;

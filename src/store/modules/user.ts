import { User, UserInfo } from "@/types";
import {
  VuexModule,
  Module,
  Mutation,
  Action,
  getModule
} from "vuex-module-decorators";
import store from "@/store";
import { login } from "@/utils/demo-api";
import {
  getUser,
  getToken,
  setToken,
  setUser,
  cleanSession
} from "@/utils/app-util";

export interface UserState {
  callingAPI: boolean;
  searching: string;
  user: User;
  token: string;
  // mode: string;
  userInfo: UserInfo;
  signedIn: boolean;
}

@Module({ store, dynamic: true, name: "userModule" })
class UserModule extends VuexModule implements UserState {
  public callingAPI = false;
  public searching = "";
  user = getUser();
  token = getToken();
  role = this.user.role;

  public userInfo = {} as UserInfo;
  public signedIn = false;


  get isSignedIn(): boolean {
    console.log('is', this.user)
    return this.user.email && this.token ? true : false;
    // return true
  }

  @Mutation
  private loginLoading() {
    this.callingAPI = !this.callingAPI;
  }
  @Mutation
  private globalSearching() {
    this.searching = this.searching === "" ? "loading" : "";
  }

  @Mutation
  private setUser(_user: User): void {
    this.user = _user;
  }

  @Mutation
  private setToken(_token: string) {
    this.token = _token;
  }

  @Mutation
  private setUserInfo(_userInfo: UserInfo) {
    this.userInfo = _userInfo;
  }

  @Action({ rawError: true })
  public async signIn(userInfo: { username: string; password: string }) {
    const { username, password } = userInfo;
    try {
      const { data } = await login("login", { username, password })
      setToken(data.accessToken);
      setUser(data.user);
    }
    catch {
      console.log('error');
    }
    
  }

  @Action({ rawError: true })
  logout() {
    this.setToken("");
    this.setUser({} as User);
    cleanSession();
  }
}

export const userModule = getModule(UserModule);

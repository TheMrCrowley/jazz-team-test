export interface LoginState {
  isAuth: boolean;
  authError: boolean;
  userName: string;
}

export enum LoginActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  LOGIN_ERROR = 'LOGIN_ERROR',
  LOGIN_RESET = 'LOGIN_RESET',
}

export interface LoginAction {
  type: LoginActionTypes.LOGIN;
  payload: { userName: string };
}

export interface LogoutAction {
  type: LoginActionTypes.LOGOUT;
}

export interface LoginErrorAction {
  type: LoginActionTypes.LOGIN_ERROR;
}

export interface LoginResetAction {
  type: LoginActionTypes.LOGIN_RESET;
}

export type LoginActions = LoginAction | LogoutAction | LoginErrorAction | LoginResetAction;

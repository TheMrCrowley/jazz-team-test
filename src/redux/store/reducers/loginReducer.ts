import { LoginActions, LoginActionTypes, LoginState } from '../../types/loginTypes';

const loginInititalState: LoginState = {
  isAuth: false,
  authError: false,
  userName: '',
};

export const loginReducer = (state = loginInititalState, action: LoginActions): LoginState => {
  switch (action.type) {
    case LoginActionTypes.LOGIN:
      return { ...state, isAuth: true, userName: action.payload.userName };
    case LoginActionTypes.LOGOUT:
      return { ...state, isAuth: false };
    case LoginActionTypes.LOGIN_RESET:
      return { ...state, authError: false };
    case LoginActionTypes.LOGIN_ERROR:
      return { ...state, authError: true };
    default:
      return state;
  }
};

export const loginAction = (payload: { userName: string }): LoginActions => ({
  type: LoginActionTypes.LOGIN,
  payload,
});
export const logoutAction = (): LoginActions => ({ type: LoginActionTypes.LOGOUT });
export const loginErrorAction = (): LoginActions => ({ type: LoginActionTypes.LOGIN_ERROR });
export const loginResetAction = (): LoginActions => ({ type: LoginActionTypes.LOGIN_RESET });

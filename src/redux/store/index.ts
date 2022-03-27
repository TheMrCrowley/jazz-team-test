import { combineReducers, createStore } from 'redux';
import { loginReducer } from './reducers/loginReducer';

const rootReducer = combineReducers({
  login: loginReducer,
});

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default store;

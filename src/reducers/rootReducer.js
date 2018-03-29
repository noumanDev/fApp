import { combineReducers } from 'redux';
import movies from '../modules/movies/movies.reducer';
import auth from '../modules/auth/auth.reducer';


const rootReducer = combineReducers({
	movies,
	auth
});

export default rootReducer;

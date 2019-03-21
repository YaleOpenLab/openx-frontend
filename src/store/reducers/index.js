import { combineReducers } from 'redux'
import projectsReducer from '../../components/Explore/Projects/store/reducers';
import loginReducer from '../../components/AuthPageComponents/LoginComponent/store/reducers';

const rootReducer = combineReducers({auth: loginReducer, projects: projectsReducer});
export default rootReducer;
import { combineReducers } from 'redux'
import loginReducer from '../../components/AuthPageComponents/LoginComponent/store/reducers';
import projectsReducer from '../../components/Explore/Projects/store/reducers';
import projectReducer from '../../components/Explore/SingleProject/store/reducers';

const rootReducer = combineReducers({auth: loginReducer, projects: projectsReducer, project: projectReducer});
export default rootReducer;
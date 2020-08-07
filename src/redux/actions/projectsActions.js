import Axios from 'axios'
import { PROJECTS_LIST_REQUEST, PROJECTS_LIST_SUCCESS, PROJECTS_LIST_FAIL } from '../constants/projectsConstants';
const projectsList = () => async dispatch => {
    dispatch({type: PROJECTS_LIST_REQUEST, payload: []});
    const { msg, data } = await Axios.get('/api/projects');
    if(data.data.length){
        dispatch({type: PROJECTS_LIST_SUCCESS, payload: data.data});
    }else{
        dispatch({type: PROJECTS_LIST_FAIL, payload: msg});
    }
}

export { projectsList }
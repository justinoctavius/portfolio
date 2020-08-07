const { PROJECTS_LIST_REQUEST, PROJECTS_LIST_SUCCESS, PROJECTS_LIST_FAIL } = require("../constants/projectsConstants");

const projectsListReducer = (state = { projects: [] }, action) => {
    switch(action.type) {
        case PROJECTS_LIST_REQUEST:
            return {loading: true, projects: []}
        case PROJECTS_LIST_SUCCESS:
            return {loading: false, success: true, projects: action.payload}
        case PROJECTS_LIST_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}

export { projectsListReducer }
// import user_action_types from '@/lib/actions/user_actions/types';
import { HYDRATE } from 'next-redux-wrapper';
import { createActions, handleActions } from 'redux-actions'
import user_action_types from "../actions/user_actions/types";

const initialState = {
    loading: false,
    users: [],
    error: null
};

// export const { addUserAction, fetchUsersAction, fetchUsersSuccess, fetchUsersError } = createActions({
//     ADD_USER_ACTION: user => ({ user }),
//     FETCH_USERS_ACTION: () => ({}),
//     FETCH_USERS_SUCCESS_ACTION: users => ({ users }),
//     FETCH_USERS_ERROR_ACTION: error => ({ error }),
// });

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        case HYDRATE: {
            return { ...action.payload.usersReducer }
        }


        case user_action_types.FETCH_USERS_ACTION:
            console.log("fetch users called");
            return {
                ...state,
                loading: true,
                error: null
            };

        case user_action_types.FETCH_USERS_SUCCESS_ACTION_TYPE:
            console.log("set users called");

            return {
                ...state,
                error: null,
                isLoading: false,
                users: action.users,
            };

        default:
            return state;
    }
};
export default usersReducer;
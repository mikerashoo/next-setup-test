import user_action_types from '@/actions/types/user_action_types';
import { HYDRATE } from 'next-redux-wrapper';
import { createActions, handleActions } from 'redux-actions'

const initialState = {
    loading: false,
    users: [],
    error: null
};

export const { addUserAction, fetchUsersAction, fetchUsersSuccess, fetchUsersError } = createActions({
    ADD_USER_ACTION: user => ({ user }),
    FETCH_USERS_ACTION: () => ({}),
    FETCH_USERS_SUCCESS_ACTION: users => ({ users }),
    FETCH_USERS_ERROR_ACTION: error => ({ error }),
});

const usersReducer = handleActions(
    {
        // [HYDRATE]: (state, { payload: { usersReducer } }) => ({ ...usersReducer }),
        [fetchUsersAction]: state => ({
            ...state,
            loading: true,
            error: null,
        }),


        [fetchUsersSuccess]: (state, { payload: { users } }) => ({
            ...state,
            error: null,
            isLoading: false,
            users: users,
        }),
        [addUserAction]: (state, { payload: { user } }) => ({
            ...state,
            error: null,
            isLoading: false,
            users: [...state.users, user],
        }),
        [fetchUsersError]: (state, { payload: { error } }) => ({ ...state, error, isLoading: false }),
    },
    initialState,
);
export default usersReducer;
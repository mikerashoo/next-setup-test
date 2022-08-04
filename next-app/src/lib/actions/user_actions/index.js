import user_action_types from "./types";

export const fetchUsersAction = () => ({
    type: user_action_types.FETCH_USERS_ACTION_TYPE
});

export const fetchUsersSuccessAction = (users) => ({
    type: user_action_types.FETCH_USERS_SUCCESS_ACTION_TYPE,
    users
});

export const fetchUsersErrorAction = (error) => ({
    type: user_action_types.FETCH_USERS_ERROR_SUCCESS_ACTION_TYPE,
    error
})
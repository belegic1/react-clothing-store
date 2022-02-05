import { UserActionTypes } from "./user.types"
export const setCurrentUser = (user) => ({
    type: UserActionTypes.SET_CIRRENT_USER,
    payload: user
})
import { userConstatntType } from "./userConstant";

export const setCurrentUser = user => ({
    type: userConstatntType.SET_CURRENT_USER,
    payload: user
})
import { UserDetail } from "../../components/Models/auth/UserDetail";

export interface IAuthState {
    loading: boolean,
    token: string,
    refreshToken: string,
    message: string,
    isSuccessful: boolean,
    permissions: Array<string>,
    userDetail: UserDetail,
}
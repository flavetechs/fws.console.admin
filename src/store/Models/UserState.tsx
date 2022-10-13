export interface IUserState {
    loading: boolean,
    token: string,
    refreshToken: string,
    message: string,
    isSuccessful: boolean,
    permissions: Array<string>,
    userDetail: null
}
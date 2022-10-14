import { UserDetail } from "../../components/Models/auth/UserDetail";

export const _state = {
    loading: false,
    token: '',
    refreshToken: '',
    message: '',
    isSuccessful: false,
    permissions: [],
    userDetail: new UserDetail()
}


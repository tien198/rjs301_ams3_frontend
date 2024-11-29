import IUser from "../interfaces/IUser"

export default class AuthenResponse {
    message: string
    user: IUser
    token: string
    constructor(response: AuthenResponse | any) {
        this.message = response.message
        this.token = response.token
        this.user = response.user
    }
}
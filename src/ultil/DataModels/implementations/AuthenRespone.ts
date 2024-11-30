import IAuthenResponse from "../interfaces/IAuthenResponse"
import IUser from "../interfaces/IUser"

export default class AuthenResponse implements IAuthenResponse {
    message: string
    token: string
    constructor(response: AuthenResponse | any) {
        this.message = response.message
        this.token = response.token
        this.user = response.user
    }
    user: IUser
}
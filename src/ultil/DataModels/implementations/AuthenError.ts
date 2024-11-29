import IAuthenError from "../interfaces/IAuthenError"

export default class AuthenError {
    message: string
    errors: IAuthenError
    credentials: string

    constructor(error: AuthenError | any) {
        this.message = error?.message
        this.errors = error?.errors
        this.credentials = error?.credentials
    }
}
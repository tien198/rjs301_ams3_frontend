import IAuthenError from "../interfaces/IAuthenError"

export default class AuthenError {
    message: string
    errors: IAuthenError

    constructor(error: AuthenError | any) {
        this.message = error?.message
        this.errors = error?.errors
    }
}
import IAuthenError from "../interfaces/IAuthenError"

export default class AuthenError implements IAuthenError {
    constructor(err?: IAuthenError | any) {
        this.email = err?.email
        this.password = err?.password
    }
    email: string | undefined
    password: string | undefined

}
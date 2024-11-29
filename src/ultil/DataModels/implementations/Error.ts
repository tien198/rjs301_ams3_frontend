import IAuthenError from "../interfaces/IAuthenError"

export default class ErrrorObj {
    message: string
    errors: IAuthenError


    constructor(error: ErrrorObj | any) {
        this.message = error?.message
        this.errors = error?.errors
    }
}
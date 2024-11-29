import IUser from "../interfaces/IUser";

export default class User implements IUser {

    constructor(email: string, password: string, name?: string, phone?: string | number) {
        this.email = email
        this.password = password
        this.name = name || ''
        this.phone = phone || ''
    }
    email: string
    password: string
    name?: string
    phone?: string | number | undefined;
}
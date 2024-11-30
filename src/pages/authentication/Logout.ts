import { redirect } from "react-router-dom";
import { removeJwt } from "../../ultil/authenTokenUltil";

export function logout() {
    removeJwt()
    return redirect('/')
}
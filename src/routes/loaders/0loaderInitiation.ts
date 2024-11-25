import { LoaderFunctionArgs } from "react-router-dom";
import { hideModalDispath } from "../dispaths/hideModalDispath";
import redirectToLowercaseUrl from "./redirectToLowercaseUrl";
import { logoAnimationAcceptDispath } from "../dispaths/logoAnimationAcceptDispath";

export default function loaderInitiation(loaderArgs: LoaderFunctionArgs, logoAnimationAccept = true) {
    redirectToLowercaseUrl(loaderArgs.request.url)
    hideModalDispath()
    if (logoAnimationAccept)
        logoAnimationAcceptDispath(true)
    else
        logoAnimationAcceptDispath(false)
}
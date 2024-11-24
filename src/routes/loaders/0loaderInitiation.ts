import { LoaderFunctionArgs } from "react-router-dom";
import { hideModalDispath } from "./hideModalDispath";
import redirectToLowercaseUrl from "./redirectToLowercaseUrl";

export default function loaderInitiation(loaderArgs: LoaderFunctionArgs) {
    redirectToLowercaseUrl(loaderArgs.request.url)
    hideModalDispath()
}
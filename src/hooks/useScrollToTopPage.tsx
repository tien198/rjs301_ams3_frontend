import { useAppDispatch, useAppSelector } from "./reduxHooks"
import { setLogoState } from "../store/logoSlice"
import { useNavigation } from "react-router-dom"

export default function useScrollToTopPage() {
    const animationAccept = useAppSelector(({ logoState }) => logoState.animationAccept)
    const dispath = useAppDispatch()
    const navigationState = useNavigation().state

    navigationState === 'idle' && scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
    if (window.scrollY === 0)
        animationAccept && dispath(setLogoState('scroll-up'))
}
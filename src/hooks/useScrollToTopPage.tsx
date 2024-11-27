import { useEffect } from "react"
import { useAppDispath, useAppSelector } from "./reduxHooks"
import { setLogoState } from "../store/logoSlice"
import { useNavigation } from "react-router-dom"

export default function useScrollToTopPage() {
    const animationAccept = useAppSelector(({ logoState }) => logoState.animationAccept)
    const dispath = useAppDispath()

    useNavigation().state === 'idle' && scrollTo(0, 0)
    useEffect(() => {
        if (window.scrollY > 0)
            scrollTo(0, 0)
        if (window.scrollY === 0)
            animationAccept && dispath(setLogoState('scroll-up'))
    }, [])
}
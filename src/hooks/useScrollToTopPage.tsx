import { useEffect } from "react"
import { useAppDispath, useAppSelector } from "./reduxHooks"
import { setLogoState } from "../store/logoSlice"

export default function useScrollToTopPage() {
    const animationAccept = useAppSelector(({ logoState }) => logoState.animationAccept)
    const dispath = useAppDispath()
    useEffect(() => {
        scrollTo(0, 0)
        if (window.scrollY === 0)
            animationAccept && dispath(setLogoState('scroll-up'))
    }, [])
}
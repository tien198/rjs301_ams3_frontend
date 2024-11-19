import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "."

interface ModalState {
    hiddenClass: string
}

const initialState: ModalState = {
    hiddenClass: 'hidden'
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        show(state) {
            state.hiddenClass = ''
        },
        hide(state) {
            state.hiddenClass = 'hidden'
        }
    }
})

export const { hide, show } = modalSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const hiddenClass = (state: RootState) => state.modal.hiddenClass

export default modalSlice.reducer
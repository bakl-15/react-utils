import { createSlice } from '@reduxjs/toolkit'


const slice = createSlice({
name: 'country',
initialState: { status: 'idle' },
reducers: {
setStatus(state, action) { state.status = action.payload }
}
})


export const { setStatus } = slice.actions
export default slice.reducer
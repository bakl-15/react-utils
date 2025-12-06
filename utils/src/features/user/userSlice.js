import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
name: 'user',
initialState: { selected: null },
reducers: {
setSelected(state, action) { state.selected = action.payload }
}
})


export const { setSelected } = userSlice.actions
export default userSlice.reducer
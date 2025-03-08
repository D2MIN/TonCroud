import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name : '',
    image: '',
    smallDescript : '',
    totalSum : 0,
    date : '',
    bigDescript : '',
    rewards : []
}

export const projectSlice = createSlice({
    name: 'ProjectSlice',
    initialState : initialState,
    reducers : {
        setProjectDetails : (state,action) => {
            const {name,image,smallDescript,totalSum,date} = action.payload;
            state.name = name;
            state.image = image;
            state.smallDescript = smallDescript;
            state.totalSum = totalSum;
            state.date = date;
        },
        setBigDescription : (state, action) => {
            const bigDescript = action.payload;
            state.bigDescript = bigDescript;
        },
        setAllRewards : (state, action) => {
            const rewards = action.payload;
            state.rewards = rewards;
        }
    }
});

// Экспорт отдельных действий
export const { setProjectDetails, setBigDescription, setAllRewards } = projectSlice.actions;

// Экспорт редюсера
export default projectSlice.reducer;
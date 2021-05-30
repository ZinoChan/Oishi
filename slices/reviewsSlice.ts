import { createAction, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";


const hydrate = createAction(HYDRATE);

// const review = {
//     content: "",
//     createdAt: "",
//     id: "",
//     movie_id: "",
//     user_id: "",
//     user_name: ""
// }

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: [],
    reducers: {
       

        getReviewsError(state, action){},

        addReview(state, action){},

        deleteReview(state, action){},

        editReview(state, action){},
    },

   
})


export const {getReviewsError,  addReview, deleteReview, editReview} = reviewsSlice.actions

export default reviewsSlice.reducer;
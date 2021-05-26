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
        getReviews(){},

        getReviewsSuccess: (state, action) => {
            return [...state, action.payload]
        },

        getReviewsError(state, action){},

        addReview(state, action){},

        deleteReview(state, action){},

        editReview(state, action){},
    },

    extraReducers(builder) {
        builder.addCase(hydrate, (state, action) => {
            return [
                ...state,
                ...(action.payload as any)[reviewsSlice.name]
            ]
        })
    }
})


export const {getReviews, getReviewsError, getReviewsSuccess, addReview, deleteReview, editReview} = reviewsSlice.actions

export default reviewsSlice.reducer;
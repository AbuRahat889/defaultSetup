import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GeneralInfo {
    reviewType: string;
    company: string;
    companyId: string;
    country: string;
    city: string;
    jobTitle: string;
    employmentType: string;
    yearsWorked: number;
    reviewTitle: string;
    selectDepartment: string;
}



interface OverAllRatings {
    overall: number;
    dailyPrayer: number;
    fridayPrayer: number;
    islamicHolidays: number;
    inclusiveAtmosphere: number;

    overallText: string;
    dailyPrayerText: string;
    fridayPrayerText: string;
    islamicHolidaysText: string;
    inclusiveAtmosphereText: string;



    prayerOption: string;
    foodOption: string;
    dressWoman: string;
    islamicHoliday: string;
}

// interface Others {
//     recommend: string;        // Whether the user recommends the company (e.g., "yes" or "no")
//     nonUserEmail: string;     // Email address provided by a non-registered user
//     suggestion: string;       // Suggestions or comments from the user
//     reviewExperience: string; // Confirmation of the review experience (e.g., "I confirm" or "No I don't agree")
// }

interface InitialStateProp {
    generalInfo: GeneralInfo | null;
    overAllRatings: OverAllRatings | null;
    // others: Others | null;
}

const initialState: InitialStateProp = {
    generalInfo: null,
    overAllRatings: null,
    // others: null,
};

const reviewFormSlice = createSlice({
    name: "reviewForm",
    initialState,
    reducers: {
        // General Info Reducers
        setGeneralInfo: (state, action: PayloadAction<GeneralInfo>) => {
            state.generalInfo = action.payload;
            console.log(action.payload);
        },
        removeGeneralInfo: (state) => {
            state.generalInfo = null;
        },

        // Overall Ratings Reducers
        setOverallRatings: (state, action: PayloadAction<OverAllRatings>) => {
            state.overAllRatings = action.payload;
        },
        removeOverallRatings: (state) => {
            state.overAllRatings = null;
        },

        // Others Reducers
        // setOthers: (state, action: PayloadAction<Others>) => {
        //     state.others = action.payload;
        // },
        // removeOthers: (state) => {
        //     state.others = null;
        // },

        // Reset the entire form state
        resetForm: () => initialState,
    },
});

export const {
    setGeneralInfo,
    removeGeneralInfo,
    setOverallRatings,
    removeOverallRatings,
    // setOthers,
    // removeOthers,
    resetForm,
} = reviewFormSlice.actions;

export default reviewFormSlice.reducer;

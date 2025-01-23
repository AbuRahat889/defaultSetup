import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BillingDetailsFormInputs {
    companyName: string;
    companyWebsite: string;
    country: string;
    city: string;
    street: string;
    postalCode: string;
    taxId?: string;
    salutation?: string;
    firstName?: string;
    lastName?: string;
    countryAlter?: string;
    cityAlter?: string;
    email?: string;
    phone?: string;
    jobTitle?: string;
    linkedIn?: string;
}

interface InitialStateProp {
    BillingDetailsFormInputs: BillingDetailsFormInputs;
    date: string;
}

const initialState: InitialStateProp = {
    BillingDetailsFormInputs: {
        companyName: '',
        companyWebsite: '',
        country: '',
        city: '',
        street: '',
        postalCode: '',
        taxId: undefined,
        salutation: undefined,
        firstName: undefined,
        lastName: undefined,
        countryAlter: undefined,
        cityAlter: undefined,
        email: undefined,
        phone: undefined,
        jobTitle: undefined,
        linkedIn: undefined,
    },
    date: ""
};

const billingSlice = createSlice({
    name: 'billing',
    initialState,
    reducers: {
        setBillingData: (state, action: PayloadAction<BillingDetailsFormInputs>) => {
            state.BillingDetailsFormInputs = action.payload;
        },
        // resetBillingData: (state) => {
        //     state.BillingDetailsFormInputs = initialState.BillingDetailsFormInputs;
        // },
    },
});

export const { setBillingData } = billingSlice.actions;

export const selectBillingData = (state: { billing: InitialStateProp }) => state.billing.BillingDetailsFormInputs;

export default billingSlice.reducer;

import { serviceDataType, verificationResponseType } from "@/types/service";
import { createSlice } from "@reduxjs/toolkit";
import {
  verifyByDemography,
  verifyByNIN,
  verifyByPhone,
  verifyByVNIN,
} from "./thunk";
import { photoUrlString, signatureUrlString } from "@/lib/imageBlob";

interface ServiceSliceState {
  selectedService: serviceDataType;
  selectedSlipType: {
    title: string;
    image: string;
    price: number;
  };

  isLoading: boolean;

  response: verificationResponseType;
}

const initialState: ServiceSliceState = {
  selectedService: {
    title: "",
    description: "",
    slug: "",
    image: "",
    isServiecAvailable: false,
  },
  selectedSlipType: {
    title: "",
    image: "",
    price: 0,
  },

  isLoading: false,
  response: {
    status: false,
    reference: "",
    data: {
      firstname: "",
      surname: "",
      middlename: "",
      birthdate: "",
      userid: "",
      gender: "",
      telephoneno: "",
      vnin: "",
      self_origin_lga: "",
      heigth: "",
      birthstate: "",
      signature: "",
      religion: "",
      educationallevel: "",
      maritalstatus: "",
      self_origin_state: "",
      spoken_language: "",
      trackingId: "",
      self_origin_place: "",
      residence_town: "",
      nok_town: "",
      residence_state: "",
      residence_address: "",
      birthcountry: "",
      psurname: "",
      pfirstname: "",
      nok_lga: "",
      nok_address2: "",
      nok_state: "",
      nok_surname: "",
      nok_firstname: "",
      ospokenlang: "",
      residencestatus: "",
      pmiddlename: "",
      email: "",
      nok_postalcode: "",
      nin: "",
      employmentstatus: "",
      birthlga: "",
      residence_lga: "",
      title: "",
      profession: "",
      centralID: "",
      nok_address1: "",
      photo: "",
      nok_middlename: "",
    },
  },
};

const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
    selectService: (state, action) => {
      state.selectedService = action.payload;
    },
    selectSlipType: (state, action) => {
      state.selectedSlipType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder

      // Verify By NIN
      .addCase(verifyByNIN.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyByNIN.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isLoading = false;
      })
      .addCase(verifyByNIN.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(verifyByVNIN.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyByVNIN.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isLoading = false;
      })
      .addCase(verifyByVNIN.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(verifyByDemography.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyByDemography.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isLoading = false;
      })
      .addCase(verifyByDemography.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(verifyByPhone.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyByPhone.fulfilled, (state, action) => {
        state.response = action.payload;
        state.isLoading = false;
      })
      .addCase(verifyByPhone.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { selectService, selectSlipType } = serviceSlice.actions;

export default serviceSlice.reducer;

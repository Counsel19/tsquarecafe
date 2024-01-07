import { createAppAsyncThunk } from "../../createAppAsyncThunk";
import axios from "axios";

export const verifyByNIN = createAppAsyncThunk(
  "services/verifyByNIN",
  async (
    {
      nin,
      transactionId,
      slipId,
    }: {
      nin: string;
      transactionId: string;
      slipId: string;
    },
    thunkAPI
  ) => {
    try {
      const res = await axios.post("/api/services/verify/nin", { nin });

      if (res.status === 200) {
        await axios.patch("/api/transactions", {
          transactionId,
          slipId,
          reference: res.data.reference,
        });
      }

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Could not Verify by NIN");
    }
  }
);
export const verifyByVNIN = createAppAsyncThunk(
  "services/verifyByVNIN",
  async (
    {
      vnin,
      transactionId,
      slipId,
    }: {
      vnin: string;
      transactionId: string;
      slipId: string;
    },
    thunkAPI
  ) => {
    try {
      const res = await axios.post("/api/services/verify/nin", { vnin });

      if (res.status === 200) {
        await axios.patch("/api/transactions", {
          transactionId,
          slipId,
          reference: res.data.reference,
        });
      }

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Could not Verify by VNIN");
    }
  }
);

export const verifyByDemography = createAppAsyncThunk(
  "services/verifyByDemography",
  async (
    {
      firstname,
      lastname,
      dob,
      gender,
      transactionId,
      slipId,
    }: {
      firstname: string;
      lastname: string;
      dob: string;
      gender: string;
      transactionId: string;
      slipId: string;
    },
    thunkAPI
  ) => {
    try {
      const res = await axios.post("/api/services/verify/demography", {
        firstname,
        lastname,
        dob,
        gender,
      });

      if (res.status === 200) {
        await axios.patch("/api/transactions", {
          transactionId,
          slipId,
          reference: res.data.reference,
        });
      }

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Could not Verify by Demography");
    }
  }
);
export const verifyByPhone = createAppAsyncThunk(
  "services/verifyByPhone",
  async (
    {
      phone,
      transactionId,
      slipId,
    }: {
      phone: string;
      transactionId: string;
      slipId: string;
    },
    thunkAPI
  ) => {
    try {
      const res = await axios.post("/api/services/verify/nin/phone", { phone });

      if (res.status === 200) {
        await axios.patch("/api/transactions", {
          transactionId,
          slipId,
          reference: res.data.reference,
        });
      }

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Could not Verify by Phone");
    }
  }
);

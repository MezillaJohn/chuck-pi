import { coinApiResponse } from "../../../types/ApiResType";
import { authenticatedBase } from "../../services";

export const coinEndpoints = authenticatedBase.injectEndpoints({
  endpoints: (builder) => ({
    allCoin: builder.query<coinApiResponse, {}>({
      query: () => ({
        url: `coins`,
      }),
      providesTags: ["coin"],
      keepUnusedDataFor: 0, // Set cache time to 0
    }),

    availableCoin: builder.query<any, {}>({
      query: () => ({
        url: `platforms`,
      }),
      providesTags: ["coin"],
      keepUnusedDataFor: 0, // Set cache time to 0
    }),

    addCoin: builder.mutation<any, {}>({
      query: (data) => ({
        url: `coins`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["coin"],
    }),

    removeCoin: builder.mutation<any, { id: string | undefined }>({
      query: ({ id }) => ({
        url: `coins/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["coin"],
    }),

    editCoin: builder.mutation<any, any>({
      query: ({ id, code, sellRate, buyRate }) => ({
        url: `coins/${id}`,
        method: "PUT",
        body: {
          code,
          sellRate,
          buyRate,
        },
      }),
      invalidatesTags: ["coin"],
    }),

    addChain: builder.mutation<any, any>({
      query: ({ id, chainName, walletAddress }) => ({
        url: `coins/${id}/chains`,
        method: "POST",
        body: {
          chainName,
          walletAddress,
        },
      }),
      invalidatesTags: ["coin"],
    }),

    removeChain: builder.mutation<any, { id: string | undefined }>({
      query: ({ id }) => ({
        url: `chains/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["coin"],
    }),
  }),
});

export const {
  useAllCoinQuery,
  useAvailableCoinQuery,
  useAddCoinMutation,
  useRemoveCoinMutation,
  useEditCoinMutation,
  useAddChainMutation,
  useRemoveChainMutation,
} = coinEndpoints;

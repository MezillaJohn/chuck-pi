import { TransactionsResponse } from "../../../types/ApiResType";
import { authenticatedBase } from "../../services";

export const tradeEndpoints = authenticatedBase.injectEndpoints({
  endpoints: (builder) => ({
    allTransaction: builder.query<TransactionsResponse, {}>({
      query: () => ({
        url: `get-admin-transaction-histories`,
      }),
      providesTags: ["transaction"],
    }),

    confirmTransaction: builder.mutation<any, any>({
      query: ({ tradeId }) => ({
        url: `trade/${tradeId}/confirm`,
        method: "POST",
      }),
      invalidatesTags: ["transaction"],
    }),

    rejectTransaction: builder.mutation<any, any>({
      query: ({ tradeId }) => ({
        url: `trade/${tradeId}/reject`,
        method: "POST",
      }),
      invalidatesTags: ["transaction"],
    }),
  }),
});

export const {
  useAllTransactionQuery,
  useConfirmTransactionMutation,
  useRejectTransactionMutation,
} = tradeEndpoints;

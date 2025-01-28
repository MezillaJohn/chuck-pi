import { User } from "../../../types/ApiResType";
import { authenticatedBase } from "../../services";

export const tradeEndpoints = authenticatedBase.injectEndpoints({
  endpoints: (builder) => ({
    moderator: builder.query<User, {}>({
      query: () => ({
        url: `moderators`,
      }),
      providesTags: ["moderator"],
    }),

    updateModeratorEmail: builder.mutation<User, {}>({
      query: (data) => ({
        url: `moderator/email`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["moderator"],
    }),

    updateModeratorUserName: builder.mutation<User, {}>({
      query: (data) => ({
        url: `moderator/username`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["moderator"],
    }),
  }),
});

export const {
  useModeratorQuery,
  useUpdateModeratorEmailMutation,
  useUpdateModeratorUserNameMutation,
} = tradeEndpoints;

import { unAuthenticatedBase } from "../../services";

export const unAuthenticatedBaseEndpoints = unAuthenticatedBase.injectEndpoints(
  {
    endpoints: (builder) => ({
      login: builder.mutation({
        query: (data) => {
          return {
            url: "login",
            method: "POST",
            body: data,
          };
        },
      }),
    }),
  }
);

export const { useLoginMutation } = unAuthenticatedBaseEndpoints;

"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getLocalStorage } from "../helpers/storage";

export const authenticatedBase = createApi({
  reducerPath: "Auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://okrypt-backend.onrender.com/api/v1/",
    prepareHeaders: (headers) => {
      if (getLocalStorage("admin_token")) {
        headers.set("Content-Type", "application/json");
        headers.set("Accept", "application/json");
        headers.set(
          "Authorization",
          `Bearer ${getLocalStorage("admin_token")}`
        );
      }
      return headers;
    },
  }),
  refetchOnReconnect: true,
  endpoints: () => ({}),
  tagTypes: ["coin", "transaction", "moderator"],
});

export const unAuthenticatedBase = createApi({
  reducerPath: "unAth",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://okrypt-backend.onrender.com/api/v1/",
  }),
  refetchOnReconnect: true,
  endpoints: () => ({}),
});

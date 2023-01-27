import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:8080/",
		credentials: "include",
	}),
	tagTypes: ["isLogin", "profile"],
	endpoints: (builder) => ({
		// auth api start
		register: builder.mutation({
			query: (signupData) => ({
				url: "api/user/register",
				method: "POST",
				body: signupData,
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			}),
		}),
		login: builder.mutation({
			query: (loginData) => ({
				url: "api/user/login",
				method: "POST",
				body: loginData,
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			}),
			invalidatesTags: ["isLogin", "profile"],
		}),
		isLoggedIn: builder.query({
			query: () => ({
				url: "api/user/isLoggedIn",
				method: "GET",
			}),
			providesTags: ["isLogin"],
		}),
	}),
});

export const { useRegisterMutation, useLoginMutation, useIsLoggedInQuery } = api;

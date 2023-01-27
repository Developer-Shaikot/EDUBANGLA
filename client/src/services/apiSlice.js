import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "http://localhost:8080/",
		credentials: "include",
	}),
	tagTypes: ["isLogin", "profile", "currentUser", "class"],
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
			invalidatesTags: ["isLogin", "profile", "currentUser"],
		}),
		isLoggedIn: builder.query({
			query: () => ({
				url: "api/user/isLoggedIn",
				method: "GET",
			}),
			providesTags: ["isLogin"],
		}),
		logout: builder.mutation({
			query: () => ({
				url: "api/user/logout",
				method: "PATCH",
			}),
			invalidatesTags: ["isLogin", "currentUser"],
		}),
		currentUser: builder.query({
			query: () => ({
				url: "api/user",
				method: "GET",
			}),
			providesTags: ["currentUser"],
		}),

		getClasses: builder.query({
			query: () => ({
				url: "api/class/",
				method: "GET",
			}),
			providesTags: ["class"],
		}),
		addClass: builder.mutation({
			query: (formData) => ({
				url: "api/class/add",
				method: "POST",
				body: formData,
			}),
		}),
	}),
});

export const {
	useRegisterMutation,
	useCurrentUserQuery,
	useLoginMutation,
	useIsLoggedInQuery,
	useLogoutMutation,

	useGetClassesQuery,
	useAddClassMutation,
} = api;

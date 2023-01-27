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
				url: "api/class",
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

		viewCourses: builder.query({
			query: () => ({
				url: `api/course`,
				method: "GET",
			}),
		}),
		addCourse: builder.mutation({
			query: (formData) => ({
				url: `api/course/add`,
				method: "POST",
				body: formData,
			}),
		}),

		viewTopic: builder.query({
			query: () => ({
				url: `api/topic`,
				method: "GET",
			}),
		}),
		addTopic: builder.mutation({
			query: (formData) => ({
				url: `api/topic/add`,
				method: "POST",
				body: formData,
			}),
		}),

		viewTopicContent: builder.query({
			query: () => ({
				url: `api/topicContent`,
				method: "GET",
			}),
		}),
		addTopicContent: builder.mutation({
			query: (formData) => ({
				url: `api/topicContent/add`,
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

	useViewCoursesQuery,
	useAddCourseMutation,

	useAddTopicMutation,
	useViewTopicQuery,

	useAddTopicContentMutation,
	useViewTopicContentQuery,
} = api;

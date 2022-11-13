import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const decorApi = createApi({
	reducerPath: "decorApi",
	tagTypes: ["Decor"],
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL,
	}),

	endpoints: (build) => ({
		fetchAllDecor: build.query({
			query: () => ({
				url: "api/decor",
				providesTags: (result) =>
					result
						? [
								...result.map(({ id }) => ({
									type: "Decor",
									id,
								})),
								{ type: "Decor", id: "List" },
						  ]
						: [{ type: "Decor", id: "List" }],
			}),
		}),
		fetchAllTypes: build.query({
			query: () => ({
				url: "api/type",
			}),
		}),
	}),
});

export const { useFetchAllDecorQuery, middleware } = decorApi;

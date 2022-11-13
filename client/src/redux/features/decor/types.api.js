import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react/";

export const typeApi = createApi({
	reducerPath: "typeApi",
	baseQuery: fetchBaseQuery({
		baseUrl: process.env.REACT_APP_API_URL,
	}),

	endpoints: (build) => ({
		fetchAllTypes: build.query({
			query: () => ({
				url: "api/type",
			}),
		}),
	}),
});

export const { useFetchAllTypesQuery } = typeApi;

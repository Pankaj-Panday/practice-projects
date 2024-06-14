import { useState } from "react";
import { useEffect } from "react";
import debounce from "lodash/debounce";
import { useCallback } from "react";

const useFetchPromise = (
	searchQuery,
	transformApiData,
	autoComplete,
	apiReq,
	debounceWait
) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	const fetchData = useCallback(
		debounce(async (searchQuery, transformApiData, apiReq, signal) => {
			try {
				const response = await apiReq(searchQuery, signal);
				if (!response?.ok) throw new Error(response.statusText);
				const data = await response.json();
				console.log(data);
				setData(transformApiData(data));
			} catch (e) {
				console.log(e);
				if (!signal.aborted) setError(e);
			}
		}, debounceWait),
		[transformApiData, apiReq, debounceWait]
	);

	useEffect(() => {
		if (!searchQuery || !autoComplete) {
			setData(null);
			setError(null);
			return;
		}

		const controller = new AbortController();
		const signal = controller.signal;

		fetchData(searchQuery, transformApiData, apiReq, signal);

		return () => {
			controller.abort();
		};
	}, [searchQuery, autoComplete, apiReq, transformApiData]);

	return [data, setData, error];
};

export default useFetchPromise;

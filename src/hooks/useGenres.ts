import genres from "../data/genres";
import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from 'ms';
import {Genre} from "../entities/genre";

const apiClient = new APIClient<Genre>('/genres');


const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'), // 24H
  initialData: genres
});

export default useGenres;
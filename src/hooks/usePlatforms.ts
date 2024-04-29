import platforms from "../data/platforms";
import ms from 'ms';
import {useQuery} from "@tanstack/react-query";
import APIClient from "../services/api-client";
import {Platform} from "../entities/platform";

const apiClient = new APIClient<Platform>('/platform/lists/parents');

const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: apiClient.getAll,
  staleTime: ms('24h'), // 24H,
  initialData: platforms
})

export default usePlatforms;

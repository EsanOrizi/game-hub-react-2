import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}


export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "54f97e5d6b004c3686bc549fef5b174a",
  },
});

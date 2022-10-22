import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePost = (id) => {
  return useQuery(["post", id], async () => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    return data;
  });
};

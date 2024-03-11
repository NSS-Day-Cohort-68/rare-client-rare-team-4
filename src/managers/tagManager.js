import { apiUrl, fetchOptions } from "../helper";

export const getAllTags = async () => {
  return await fetch(`${apiUrl}/tags`).then((res) => res.json());
};

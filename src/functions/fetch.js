import { BASE_URL } from "../utils/constants"

export const fetchApi = async (endpoint) => {

    const params = new URLSearchParams();

    const response = await fetch(`${BASE_URL}/${endpoint}`);
    const data = await response.json();
    return data;
}
/** @format */

import axios from "axios";

const API_KEY = "22372696-7b3b1eaff1e1a15c11afd4170";
const BASE_URL = "https://pixabay.com/api/";

const fetchImages = ({ valueQuery = "", page = 1 }) => {
  return axios.get(
    `${BASE_URL}?key=${API_KEY}&q=${valueQuery}&page=${page}&image_type=photo&pretty=true&per_page=12`
  );
};

export default fetchImages;

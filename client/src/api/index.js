import axios from "axios";

const url = "http://localhost:4070/posts";

export const fetchPosts = () => axios.get(url);

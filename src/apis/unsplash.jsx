import axios from "axios";

const KEY = "WJTRZbxL4rmNiaZIVHpxRke5VtiThz9u74rKqZUjPx8";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${KEY}`,
  },
});

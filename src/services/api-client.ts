import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2d76b2cf6865476998e19ae663822380",
  },
});

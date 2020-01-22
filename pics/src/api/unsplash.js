import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID ca9af99042873674ef7dd989a7e3cdf72c574c69a7f1bb4805fd030d0c365ddf"
  }
});

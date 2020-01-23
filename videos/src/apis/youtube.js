import axios from "axios";

const KEY = "AIzaSyAEy2E3YJh7R9wzZd89HSvi2FcOOutOfo8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});

import axios from "axios";

export default function api() {
  return axios.create({
    baseURL: "http://152.228.171.195:8081/"
  });
}

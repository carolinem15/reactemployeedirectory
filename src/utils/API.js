import axios from "axios";

const BASEURL = "https://randomuser.me/api/?";

export default {
  getRandomUsers: function() {
    return axios.get(BASEURL + "results=50")
  }
};

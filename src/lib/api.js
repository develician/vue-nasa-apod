import axios from "axios";

export function getAPOD(date = "") {
  return axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=ThTMtZ4PkTSM1tEbKnnEtVSg2sz4RQRGD3Pezg9B&date=${date}`
  );
}

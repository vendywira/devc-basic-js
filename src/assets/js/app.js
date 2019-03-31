import HttpLib from "./httplib.js"

const http = new HttpLib
http.get("https://swapi.co/api/planets/")
  .then(resp => console.log(resp))
  .catch(err => console.log(err))
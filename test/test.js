import qwiker from "../index.js";

console.log("Qwiker Version:", qwiker.VERSION);

let api_response = "";

const api = qwiker.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
  headers: { "Content-Type": "application/json" },
});

api
  .get(`/posts/1`)
  .then((res) => (api_response = res))
  .catch((err) => (api_response = err.message))
  .finally(() => console.log("Response Message:", api_response));

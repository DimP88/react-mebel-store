import ky from "ky";

const api = ky.create({
  prefixUrl: "https://mebelserver.onrender.com/",
});

export default api;

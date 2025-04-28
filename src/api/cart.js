import axios from "./axios";
import { END_POINTS } from "./endpoints";

async function getCart() {
  return axios.get(END_POINTS.CART).then((result) => result.data);
}

async function addToCart(data) {
  return axios.post(END_POINTS.CART, data);
}
async function removeFromCart(id) {
  return axios.delete(`${END_POINTS.CART}/${id}`);
}

export { getCart, addToCart, removeFromCart };
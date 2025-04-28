import axios from "./axios";
import { END_POINTS } from "./endpoints";

export async function getCourses() {
  return axios.get(END_POINTS.COURSES).then((result) => result.data);
}
export async function getSingleCourse(id) {
  return axios.get(END_POINTS.COURSE_DETAILS(id)).then((result) => result.data);
}
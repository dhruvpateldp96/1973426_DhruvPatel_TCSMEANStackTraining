import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

export const getUserToken = () => {
  try {
    let data = JSON.parse(localStorage.getItem("user_data"));
    return data.token;
  } catch (e) {
    return false;
  }
};

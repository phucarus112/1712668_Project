const URL = "http://api.dev.letstudy.org"

export const API_REGISTER = URL + "/user/register";
export const API_SEND_ACTIVATE_EMAIL = URL + "/user/send-activate-email";
export const API_ACTIVATE_EMAIL = URL +"/user/activate-email";
export const API_LOGIN = URL +"/user/login";
export const API_LOGIN_GOOGLE = URL +"/user/login-google-mobile";
export const API_FORGET_PASS_SEND_EMAIL = URL +"/user/forget-pass/send-email";
export const API_FORGET_PASS_TOKEN = URL +"/user/forget-pass/jwt/{token}";
export const API_RESET_PASSWORD = URL +"/user/reset-password";
export const API_CHANGE_PASSWORD = URL +"/user/change-password";

export const API_ALL_CATEGORIES = URL + "/category/all";
export const API_COURSE_SEARCH = URL + "/course/search";
export const API_TOP_NEW = URL + "/course/top-new";
export const API_TOP_SELL = URL + "/course/top-sell";
export const API_TOP_RATE = URL + "/course/top-rate";
export const API_RECOMMEND = URL +"/user/recommend-course";

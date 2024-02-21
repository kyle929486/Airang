import axios from "axios";
import { getCookieToken } from "../store/Cookie";

export const getNewRefreshToken =  () => {
    const accessToken = localStorage.getItem('access');
    const refreshToken = getCookieToken;

};
import axios from "axios";

import { HTTP_METHOD } from "next/dist/server/web/http";
type HTTP_EXEND = HTTP_METHOD | "get" | "post" | "put" | "delete" | "patch";
export const baseUrl = "https://api.prestoenviro.com/api/presto/v1";

export const baseUrlImg = process.env.REACT_APP_BASE_URL_IMG || "https://api.prestoenviro.com";

export const api = axios.create({
    baseURL: baseUrl,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});
type OptionsType = {
    params?: any;
    postfix?: any;
    data?: any;
    next?: RequestInit;
};
export const nextFetch = (endURL: string) => {
    return (options?: Omit<OptionsType, "data">) => {
        const params = options?.params ? "/" + options.params : "";
        let url = `/${endURL}${params}`;
        if (options?.postfix) {
            url += options.postfix;
        }
        return fetch(baseUrl + url, options?.next);
    };
};
export const baseFunc = (endURL: string) => {
    return (method: HTTP_EXEND, options: Omit<OptionsType, "next">) => {
        const params = options?.params ? "/" + options.params : "";
        let url = `/${endURL}${params}`;
        if (options?.postfix) {
            url += options.postfix;
        }
        if (method.toLowerCase() === "get") {
            return api.get(url);
        } else if (method.toLowerCase() === "post") {
            return api.post(url, options?.data);
        } else if (method.toLowerCase() === "put") {
            return api.put(url, options?.data);
        } else if (method.toLowerCase() === "delete") {
            return api.delete(url, {
                data: JSON.stringify({ deleted: 1 }),
            });
        }
    };
};

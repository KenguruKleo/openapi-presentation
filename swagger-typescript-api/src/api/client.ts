import {Api} from "../generated/openapi";
import responseValidator from "./responseValidator";

const fetchWithInterceptor = (input: RequestInfo, init?: RequestInit): Promise<Response> => {
  let method = "GET";

  if (typeof input === "string" && init?.method) {
    method = init.method;
  } else if (typeof input !== "string" && input?.method) {
    method = input.method;
  }

  return fetch(input, init).then(async response => {
    if (method) {
      await responseValidator(response.clone(), method);
    }
    return response;
  });
};

export const client = new Api({
  customFetch: fetchWithInterceptor,
  baseUrl: "/api"
});

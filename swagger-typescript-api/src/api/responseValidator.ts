import {createResponseValidator, ValidationResult} from "openapi-runtime-validator";

import openApiSchema from "../generated/openapi.json";

const preparePathname = (path: string): string => {
  // exclude internal Proxy paths
  return path
    .replace("/api/", "/");
};

const onValidate = ({response, validationError, method, path}: ValidationResult) => {
  if (validationError?.message) {
    const errorMessage = validationError?.message || "";
    const fullErrorMessage = `[BE] response error in schema
      METHOD: ${method},
      URL: ${response.url}
      STATUS: ${response.status}
      operationId: ${validationError?.operationId}
      
      VALIDATION ERROR: ${errorMessage}
    `;

    console.error(fullErrorMessage);

    switch (path) {
      case "/version": {
        throw new Error(fullErrorMessage)
      }
      default:
        break;
    }
  }
};

const responseValidator = createResponseValidator({
  openApiSchema,
  preparePathname,
  onValidate
});

export default responseValidator;

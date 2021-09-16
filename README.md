### Generate Backend

```shell
npm install @openapitools/openapi-generator-cli -g

openapi-generator-cli generate -i openapi.yaml -g nodejs-express-server -o ./backend
```

Implement necessary Services

### Create Frontend

```shell
create-react-app swagger-typescript-api --template typescript

npm run generate:types
# ^^^ it is a shortcut for
# npx swagger-typescript-api -p ../openapi.yaml -o src/generated/ -n openapi.ts --union-enums
# npx js-yaml ../openapi.yaml > ./src/generated/openapi.json

```
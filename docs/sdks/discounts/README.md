# Discounts

## Overview

### Available Operations

* [list](#list) - List Discounts
* [create](#create) - Create Discount
* [get](#get) - Get Discount
* [delete](#delete) - Delete Discount
* [update](#update) - Update Discount

## list

List discounts.

**Scopes**: `discounts:read` `discounts:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="discounts:list" method="get" path="/v1/discounts/" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await pago.discounts.list({
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  });

  for await (const page of result) {
    console.log(page);
  }
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PagoCore } from "@pago-sh/sdk/core.js";
import { discountsList } from "@pago-sh/sdk/funcs/discountsList.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await discountsList(pago, {
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("discountsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DiscountsListRequest](../../models/operations/discountslistrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DiscountsListResponse](../../models/operations/discountslistresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## create

Create a discount.

**Scopes**: `discounts:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="discounts:create" method="post" path="/v1/discounts/" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await pago.discounts.create({
    name: "<value>",
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    type: "fixed",
    duration: "once",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PagoCore } from "@pago-sh/sdk/core.js";
import { discountsCreate } from "@pago-sh/sdk/funcs/discountsCreate.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await discountsCreate(pago, {
    name: "<value>",
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    type: "fixed",
    duration: "once",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("discountsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.DiscountCreate](../../models/components/discountcreate.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Discount](../../models/components/discount.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## get

Get a discount by ID.

**Scopes**: `discounts:read` `discounts:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="discounts:get" method="get" path="/v1/discounts/{id}" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await pago.discounts.get({
    id: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PagoCore } from "@pago-sh/sdk/core.js";
import { discountsGet } from "@pago-sh/sdk/funcs/discountsGet.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await discountsGet(pago, {
    id: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("discountsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DiscountsGetRequest](../../models/operations/discountsgetrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Discount](../../models/components/discount.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ResourceNotFound    | 404                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## delete

Delete a discount.

**Scopes**: `discounts:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="discounts:delete" method="delete" path="/v1/discounts/{id}" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  await pago.discounts.delete({
    id: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PagoCore } from "@pago-sh/sdk/core.js";
import { discountsDelete } from "@pago-sh/sdk/funcs/discountsDelete.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await discountsDelete(pago, {
    id: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("discountsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DiscountsDeleteRequest](../../models/operations/discountsdeleterequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ResourceNotFound    | 404                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## update

Update a discount.

**Scopes**: `discounts:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="discounts:update" method="patch" path="/v1/discounts/{id}" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await pago.discounts.update({
    id: "<value>",
    discountUpdate: {},
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PagoCore } from "@pago-sh/sdk/core.js";
import { discountsUpdate } from "@pago-sh/sdk/funcs/discountsUpdate.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await discountsUpdate(pago, {
    id: "<value>",
    discountUpdate: {},
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("discountsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DiscountsUpdateRequest](../../models/operations/discountsupdaterequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Discount](../../models/components/discount.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ResourceNotFound    | 404                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |
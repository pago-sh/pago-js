# Orders

## Overview

### Available Operations

* [list](#list) - List Orders
* [create](#create) - Create Order
* [export](#export) - Export Orders
* [get](#get) - Get Order
* [update](#update) - Update Order
* [finalize](#finalize) - Finalize Order
* [invoice](#invoice) - Get Order Invoice
* [generateInvoice](#generateinvoice) - Generate Order Invoice
* [receipt](#receipt) - Get Order Receipt

## list

List orders.

**Scopes**: `orders:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="orders:list" method="get" path="/v1/orders/" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await pago.orders.list({
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
import { ordersList } from "@pago-sh/sdk/funcs/ordersList.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await ordersList(pago, {
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  });
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("ordersList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OrdersListRequest](../../models/operations/orderslistrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.OrdersListResponse](../../models/operations/orderslistresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## create

Create a draft order for an off-session charge against a saved payment
method. The order is created with `status=draft` and no invoice number;
call `POST /v1/orders/{id}/finalize` to attempt the charge.

The organization must have the `off_session_charges_enabled` feature flag.

**Scopes**: `orders:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="orders:create" method="post" path="/v1/orders/" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await pago.orders.create({
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    customerId: "<value>",
    productId: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PagoCore } from "@pago-sh/sdk/core.js";
import { ordersCreate } from "@pago-sh/sdk/funcs/ordersCreate.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await ordersCreate(pago, {
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    customerId: "<value>",
    productId: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.OrderCreate](../../models/components/ordercreate.md)                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Order](../../models/components/order.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## export

Export orders as a CSV file.

**Scopes**: `orders:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="orders:export" method="get" path="/v1/orders/export" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await pago.orders.export({
    organizationId: null,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PagoCore } from "@pago-sh/sdk/core.js";
import { ordersExport } from "@pago-sh/sdk/funcs/ordersExport.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await ordersExport(pago, {
    organizationId: null,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersExport failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OrdersExportRequest](../../models/operations/ordersexportrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.OrdersExportResponse](../../models/operations/ordersexportresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## get

Get an order by ID.

**Scopes**: `orders:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="orders:get" method="get" path="/v1/orders/{id}" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await pago.orders.get({
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
import { ordersGet } from "@pago-sh/sdk/funcs/ordersGet.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await ordersGet(pago, {
    id: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OrdersGetRequest](../../models/operations/ordersgetrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Order](../../models/components/order.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ResourceNotFound    | 404                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## update

Update an order.

**Scopes**: `orders:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="orders:update" method="patch" path="/v1/orders/{id}" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await pago.orders.update({
    id: "<value>",
    orderUpdate: {
      billingAddress: {
        country: "US",
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PagoCore } from "@pago-sh/sdk/core.js";
import { ordersUpdate } from "@pago-sh/sdk/funcs/ordersUpdate.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await ordersUpdate(pago, {
    id: "<value>",
    orderUpdate: {
      billingAddress: {
        country: "US",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OrdersUpdateRequest](../../models/operations/ordersupdaterequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Order](../../models/components/order.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ResourceNotFound    | 404                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## finalize

Finalize a draft order and synchronously attempt an off-session charge.

On success, the order transitions to `paid` and benefit grants fire
before the response returns. On failure (decline, missing payment method,
SCA challenge), the order stays in `draft` and a 4xx error is returned.

The request fails with 412 if the order is not in `draft` status.

**Scopes**: `orders:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="orders:finalize" method="post" path="/v1/orders/{id}/finalize" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await pago.orders.finalize({
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
import { ordersFinalize } from "@pago-sh/sdk/funcs/ordersFinalize.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await ordersFinalize(pago, {
    id: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersFinalize failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OrdersFinalizeRequest](../../models/operations/ordersfinalizerequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Order](../../models/components/order.md)\>**

### Errors

| Error Type                             | Status Code                            | Content Type                           |
| -------------------------------------- | -------------------------------------- | -------------------------------------- |
| errors.PaymentFailed                   | 402                                    | application/json                       |
| errors.PaymentActionRequired           | 402                                    | application/json                       |
| errors.OffSessionChargesNotEnabled     | 403                                    | application/json                       |
| errors.OrganizationNotReadyForPayments | 403                                    | application/json                       |
| errors.ResourceNotFound                | 404                                    | application/json                       |
| errors.OrderNotDraft                   | 412                                    | application/json                       |
| errors.HTTPValidationError             | 422                                    | application/json                       |
| errors.SDKError                        | 4XX, 5XX                               | \*/\*                                  |

## invoice

Get an order's invoice data.

**Scopes**: `orders:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="orders:invoice" method="get" path="/v1/orders/{id}/invoice" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await pago.orders.invoice({
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
import { ordersInvoice } from "@pago-sh/sdk/funcs/ordersInvoice.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await ordersInvoice(pago, {
    id: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersInvoice failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OrdersInvoiceRequest](../../models/operations/ordersinvoicerequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.OrderInvoice](../../models/components/orderinvoice.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ResourceNotFound    | 404                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## generateInvoice

Trigger generation of an order's invoice.

**Scopes**: `orders:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="orders:generate_invoice" method="post" path="/v1/orders/{id}/invoice" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await pago.orders.generateInvoice({
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
import { ordersGenerateInvoice } from "@pago-sh/sdk/funcs/ordersGenerateInvoice.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await ordersGenerateInvoice(pago, {
    id: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersGenerateInvoice failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OrdersGenerateInvoiceRequest](../../models/operations/ordersgenerateinvoicerequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                          | Status Code                         | Content Type                        |
| ----------------------------------- | ----------------------------------- | ----------------------------------- |
| errors.MissingInvoiceBillingDetails | 422                                 | application/json                    |
| errors.NotPaidOrder                 | 422                                 | application/json                    |
| errors.SDKError                     | 4XX, 5XX                            | \*/\*                               |

## receipt

Get a presigned URL to download an order's receipt PDF.

**Scopes**: `orders:read`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="orders:receipt" method="get" path="/v1/orders/{id}/receipt" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await pago.orders.receipt({
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
import { ordersReceipt } from "@pago-sh/sdk/funcs/ordersReceipt.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await ordersReceipt(pago, {
    id: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("ordersReceipt failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.OrdersReceiptRequest](../../models/operations/ordersreceiptrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.OrderReceipt](../../models/components/orderreceipt.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ResourceNotFound    | 404                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |
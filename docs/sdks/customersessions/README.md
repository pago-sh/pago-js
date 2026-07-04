# CustomerSessions

## Overview

### Available Operations

* [create](#create) - Create Customer Session

## create

Create a customer session.

For organizations with `member_model_enabled`, this will automatically
create a member session for the owner member of the customer.

**Scopes**: `customer_sessions:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer-sessions:create" method="post" path="/v1/customer-sessions/" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await pago.customerSessions.create({
    externalCustomerId: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PagoCore } from "@pago-sh/sdk/core.js";
import { customerSessionsCreate } from "@pago-sh/sdk/funcs/customerSessionsCreate.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const res = await customerSessionsCreate(pago, {
    externalCustomerId: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerSessionsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomerSessionsCreateCustomerSessionCreate](../../models/operations/customersessionscreatecustomersessioncreate.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomerSession](../../models/components/customersession.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |
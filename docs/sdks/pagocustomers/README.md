# CustomerPortal.Customers

## Overview

### Available Operations

* [get](#get) - Get Customer
* [update](#update) - Update Customer
* [listPaymentMethods](#listpaymentmethods) - List Customer Payment Methods
* [addPaymentMethod](#addpaymentmethod) - Add Customer Payment Method
* [confirmPaymentMethod](#confirmpaymentmethod) - Confirm Customer Payment Method
* [deletePaymentMethod](#deletepaymentmethod) - Delete Customer Payment Method
* [requestEmailUpdate](#requestemailupdate) - Request Email Change
* [checkEmailUpdate](#checkemailupdate) - Check Email Change Token
* [verifyEmailUpdate](#verifyemailupdate) - Verify Email Change

## get

Get authenticated customer.

**Scopes**: `customer_portal:read` `customer_portal:write`

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer_portal:customers:get" method="get" path="/v1/customer-portal/customers/me" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago();

async function run() {
  const result = await pago.customerPortal.customers.get({
    customerSession: process.env["PAGO_CUSTOMER_SESSION"] ?? "",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PagoCore } from "@pago-sh/sdk/core.js";
import { customerPortalCustomersGet } from "@pago-sh/sdk/funcs/customerPortalCustomersGet.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore();

async function run() {
  const res = await customerPortalCustomersGet(pago, {
    customerSession: process.env["PAGO_CUSTOMER_SESSION"] ?? "",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerPortalCustomersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.CustomerPortalCustomersGetSecurity](../../models/operations/customerportalcustomersgetsecurity.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomerPortalCustomer](../../models/components/customerportalcustomer.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |

## update

Update authenticated customer.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer_portal:customers:update" method="patch" path="/v1/customer-portal/customers/me" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago();

async function run() {
  const result = await pago.customerPortal.customers.update({
    customerSession: process.env["PAGO_CUSTOMER_SESSION"] ?? "",
  }, {
    billingAddress: {
      country: "US",
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
import { customerPortalCustomersUpdate } from "@pago-sh/sdk/funcs/customerPortalCustomersUpdate.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore();

async function run() {
  const res = await customerPortalCustomersUpdate(pago, {
    customerSession: process.env["PAGO_CUSTOMER_SESSION"] ?? "",
  }, {
    billingAddress: {
      country: "US",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerPortalCustomersUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CustomerPortalCustomerUpdate](../../models/components/customerportalcustomerupdate.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CustomerPortalCustomersUpdateSecurity](../../models/operations/customerportalcustomersupdatesecurity.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomerPortalCustomer](../../models/components/customerportalcustomer.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## listPaymentMethods

Get saved payment methods of the authenticated customer.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer_portal:customers:list_payment_methods" method="get" path="/v1/customer-portal/customers/me/payment-methods" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago();

async function run() {
  const result = await pago.customerPortal.customers.listPaymentMethods({
    customerSession: process.env["PAGO_CUSTOMER_SESSION"] ?? "",
  }, {});

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
import { customerPortalCustomersListPaymentMethods } from "@pago-sh/sdk/funcs/customerPortalCustomersListPaymentMethods.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore();

async function run() {
  const res = await customerPortalCustomersListPaymentMethods(pago, {
    customerSession: process.env["PAGO_CUSTOMER_SESSION"] ?? "",
  }, {});
  if (res.ok) {
    const { value: result } = res;
    for await (const page of result) {
    console.log(page);
  }
  } else {
    console.log("customerPortalCustomersListPaymentMethods failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomerPortalCustomersListPaymentMethodsRequest](../../models/operations/customerportalcustomerslistpaymentmethodsrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CustomerPortalCustomersListPaymentMethodsSecurity](../../models/operations/customerportalcustomerslistpaymentmethodssecurity.md)                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CustomerPortalCustomersListPaymentMethodsResponse](../../models/operations/customerportalcustomerslistpaymentmethodsresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## addPaymentMethod

Add a payment method to the authenticated customer.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer_portal:customers:add_payment_method" method="post" path="/v1/customer-portal/customers/me/payment-methods" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago();

async function run() {
  const result = await pago.customerPortal.customers.addPaymentMethod({
    customerSession: process.env["PAGO_CUSTOMER_SESSION"] ?? "",
  }, {
    confirmationTokenId: "<id>",
    setDefault: false,
    returnUrl: "https://yearly-custom.net/",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PagoCore } from "@pago-sh/sdk/core.js";
import { customerPortalCustomersAddPaymentMethod } from "@pago-sh/sdk/funcs/customerPortalCustomersAddPaymentMethod.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore();

async function run() {
  const res = await customerPortalCustomersAddPaymentMethod(pago, {
    customerSession: process.env["PAGO_CUSTOMER_SESSION"] ?? "",
  }, {
    confirmationTokenId: "<id>",
    setDefault: false,
    returnUrl: "https://yearly-custom.net/",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerPortalCustomersAddPaymentMethod failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CustomerPaymentMethodCreate](../../models/components/customerpaymentmethodcreate.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CustomerPortalCustomersAddPaymentMethodSecurity](../../models/operations/customerportalcustomersaddpaymentmethodsecurity.md)                                       | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomerPaymentMethodCreateResponse](../../models/components/customerpaymentmethodcreateresponse.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.PaymentMethodSetupFailed | 400                             | application/json                |
| errors.HTTPValidationError      | 422                             | application/json                |
| errors.SDKError                 | 4XX, 5XX                        | \*/\*                           |

## confirmPaymentMethod

Confirm a payment method for the authenticated customer.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer_portal:customers:confirm_payment_method" method="post" path="/v1/customer-portal/customers/me/payment-methods/confirm" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago();

async function run() {
  const result = await pago.customerPortal.customers.confirmPaymentMethod({
    customerSession: process.env["PAGO_CUSTOMER_SESSION"] ?? "",
  }, {
    setupIntentId: "<id>",
    setDefault: true,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PagoCore } from "@pago-sh/sdk/core.js";
import { customerPortalCustomersConfirmPaymentMethod } from "@pago-sh/sdk/funcs/customerPortalCustomersConfirmPaymentMethod.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore();

async function run() {
  const res = await customerPortalCustomersConfirmPaymentMethod(pago, {
    customerSession: process.env["PAGO_CUSTOMER_SESSION"] ?? "",
  }, {
    setupIntentId: "<id>",
    setDefault: true,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerPortalCustomersConfirmPaymentMethod failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CustomerPaymentMethodConfirm](../../models/components/customerpaymentmethodconfirm.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CustomerPortalCustomersConfirmPaymentMethodSecurity](../../models/operations/customerportalcustomersconfirmpaymentmethodsecurity.md)                               | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomerPaymentMethodCreateResponse](../../models/components/customerpaymentmethodcreateresponse.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.CustomerNotReady    | 400                        | application/json           |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## deletePaymentMethod

Delete a payment method from the authenticated customer.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer_portal:customers:delete_payment_method" method="delete" path="/v1/customer-portal/customers/me/payment-methods/{id}" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago();

async function run() {
  await pago.customerPortal.customers.deletePaymentMethod({
    customerSession: process.env["PAGO_CUSTOMER_SESSION"] ?? "",
  }, {
    id: "<id>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PagoCore } from "@pago-sh/sdk/core.js";
import { customerPortalCustomersDeletePaymentMethod } from "@pago-sh/sdk/funcs/customerPortalCustomersDeletePaymentMethod.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore();

async function run() {
  const res = await customerPortalCustomersDeletePaymentMethod(pago, {
    customerSession: process.env["PAGO_CUSTOMER_SESSION"] ?? "",
  }, {
    id: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("customerPortalCustomersDeletePaymentMethod failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomerPortalCustomersDeletePaymentMethodRequest](../../models/operations/customerportalcustomersdeletepaymentmethodrequest.md)                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CustomerPortalCustomersDeletePaymentMethodSecurity](../../models/operations/customerportalcustomersdeletepaymentmethodsecurity.md)                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                                    | Status Code                                   | Content Type                                  |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| errors.PaymentMethodInUseByActiveSubscription | 400                                           | application/json                              |
| errors.ResourceNotFound                       | 404                                           | application/json                              |
| errors.HTTPValidationError                    | 422                                           | application/json                              |
| errors.SDKError                               | 4XX, 5XX                                      | \*/\*                                         |

## requestEmailUpdate

Request an email change for the authenticated customer.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer_portal:customers:request_email_update" method="post" path="/v1/customer-portal/customers/me/email-update/request" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago();

async function run() {
  const result = await pago.customerPortal.customers.requestEmailUpdate({
    customerSession: process.env["PAGO_CUSTOMER_SESSION"] ?? "",
  }, {
    email: "Tommie_Larkin78@gmail.com",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PagoCore } from "@pago-sh/sdk/core.js";
import { customerPortalCustomersRequestEmailUpdate } from "@pago-sh/sdk/funcs/customerPortalCustomersRequestEmailUpdate.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore();

async function run() {
  const res = await customerPortalCustomersRequestEmailUpdate(pago, {
    customerSession: process.env["PAGO_CUSTOMER_SESSION"] ?? "",
  }, {
    email: "Tommie_Larkin78@gmail.com",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerPortalCustomersRequestEmailUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CustomerEmailUpdateRequest](../../models/components/customeremailupdaterequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `security`                                                                                                                                                                     | [operations.CustomerPortalCustomersRequestEmailUpdateSecurity](../../models/operations/customerportalcustomersrequestemailupdatesecurity.md)                                   | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[any](../../models/.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## checkEmailUpdate

Check if an email change verification token is still valid.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer_portal:customers:check_email_update" method="get" path="/v1/customer-portal/customers/me/email-update/check" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago();

async function run() {
  await pago.customerPortal.customers.checkEmailUpdate({
    token: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PagoCore } from "@pago-sh/sdk/core.js";
import { customerPortalCustomersCheckEmailUpdate } from "@pago-sh/sdk/funcs/customerPortalCustomersCheckEmailUpdate.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore();

async function run() {
  const res = await customerPortalCustomersCheckEmailUpdate(pago, {
    token: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("customerPortalCustomersCheckEmailUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CustomerPortalCustomersCheckEmailUpdateRequest](../../models/operations/customerportalcustomerscheckemailupdaterequest.md)                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.HTTPValidationError | 422                        | application/json           |
| errors.SDKError            | 4XX, 5XX                   | \*/\*                      |

## verifyEmailUpdate

Verify an email change using the token from the verification email.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="customer_portal:customers:verify_email_update" method="post" path="/v1/customer-portal/customers/me/email-update/verify" -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago();

async function run() {
  const result = await pago.customerPortal.customers.verifyEmailUpdate({
    token: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PagoCore } from "@pago-sh/sdk/core.js";
import { customerPortalCustomersVerifyEmailUpdate } from "@pago-sh/sdk/funcs/customerPortalCustomersVerifyEmailUpdate.js";

// Use `PagoCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const pago = new PagoCore();

async function run() {
  const res = await customerPortalCustomersVerifyEmailUpdate(pago, {
    token: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("customerPortalCustomersVerifyEmailUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.CustomerEmailUpdateVerifyRequest](../../models/components/customeremailupdateverifyrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.CustomerEmailUpdateVerifyResponse](../../models/components/customeremailupdateverifyresponse.md)\>**

### Errors

| Error Type      | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4XX, 5XX        | \*/\*           |
<!-- Start SDK Example Usage [usage] -->
```typescript
import { Pago } from "@pago-sh/sdk";

const pago = new Pago({
  accessToken: process.env["PAGO_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await pago.organizations.listOrganizations({});

  for await (const page of result) {
    console.log(page);
  }
}

run();

```
<!-- End SDK Example Usage [usage] -->
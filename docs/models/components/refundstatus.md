# RefundStatus

## Example Usage

```typescript
import { RefundStatus } from "@pago-sh/sdk/models/components/refundstatus.js";

let value: RefundStatus = "pending";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "succeeded" | "failed" | "canceled" | Unrecognized<string>
```
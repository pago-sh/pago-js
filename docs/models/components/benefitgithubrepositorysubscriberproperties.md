# BenefitGitHubRepositorySubscriberProperties

Properties available to subscribers for a benefit of type `github_repository`.

## Example Usage

```typescript
import { BenefitGitHubRepositorySubscriberProperties } from "@pago-sh/sdk/models/components/benefitgithubrepositorysubscriberproperties.js";

let value: BenefitGitHubRepositorySubscriberProperties = {
  repositoryOwner: "pago-sh",
  repositoryName: "private_repo",
};
```

## Fields

| Field                        | Type                         | Required                     | Description                  | Example                      |
| ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ---------------------------- |
| `repositoryOwner`            | *string*                     | :heavy_check_mark:           | The owner of the repository. | pago-sh                  |
| `repositoryName`             | *string*                     | :heavy_check_mark:           | The name of the repository.  | private_repo                 |
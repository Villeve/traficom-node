[![CI/CD](https://github.com/villeve/traficom-node/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/villeve/traficom-node/actions/workflows/ci-cd.yml)
[![npm version](https://badge.fury.io/js/traficom-node.svg)](https://badge.fury.io/js/traficom-node)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Downloads](https://img.shields.io/npm/dm/traficom-node.svg)](https://www.npmjs.com/package/traficom-node)

# Traficom Node.js SDK

A comprehensive Node.js SDK for the Traficom API, providing easy access to Finnish transport and communications data.

## Features

- 🔍 Type-safe API access
- 📝 Full TypeScript support
- 🚀 Promise-based async/await interface
- 📘 Well-documented API methods
- 🚫 No external dependencies

## Installation

Install the package using npm:

```bash
npm install traficom-node
```

Or using yarn:

```bash
yarn add traficom-node
```

## Quick Start

```typescript
import { createClient } from "traficom-node";

// Initialize the client
const client = createClient();

// Basic usage
const fetchTelecomCompanies = async () => {
  try {
    const telecomCompanies = await client.getTelecomCompanyIdentifiers();
    return telecomCompanies.value;
  } catch (error) {
    console.error("Error:", error);
  }
};
```

## Common Use Cases

### Filtering and Pagination

```typescript
// Get first 5 mobile network codes ordered by company name
const mobileNetworks = await client.getMobileNetworkCodes({
  $top: 5,
  $orderby: "Company asc",
  $select: "ID,Number,Company",
});

// Filter broadband projects by municipality
const projects = await client.getBroadbandProjects({
  $filter: "Municipality eq 'Helsinki'",
  $select: "ID,ProjectName,OperatorName",
});
```

### Working with Network Availability Data

```typescript
// Get municipality-specific network availability
const municipalityAvailability =
  await client.getFixedNetworkMunicipalitySpecificAvailability({
    $filter: "Availability2Mb gt 90",
    $select: "Name,Number,Availability2Mb",
  });

// Get province-level network coverage
const provinceAvailability =
  await client.getFixedNetworkProvinceSpecificAvailability({
    $orderby: "Name asc",
    $select: "Name,Availability100Mb",
  });
```

### Telecom Number Management

```typescript
// Get national service numbers
const serviceNumbers = await client.getNationalServiceNumbers({
  $filter: "Company eq 'Elisa Oyj'",
  $select: "Number,Company,Granted",
});

// Get subscriber numbers with pagination
const subscriberNumbers = await client.getNationalSubscriberNumbers({
  $top: 10,
  $skip: 20,
  $orderby: "Granted desc",
});
```

### Error Handling

```typescript
try {
  const result = await client.getTelecomCompanyIdentifierById(NaN);
} catch (error) {
  if (error instanceof TraficomError) {
    console.error(`API Error (${error.statusCode}):`, error.message);
  } else {
    console.error("Unexpected error:", error);
  }
}
```

## Query Parameters

The SDK supports all OData query parameters:

- `$select`: Choose specific fields
- `$filter`: Filter results
- `$orderby`: Sort results
- `$top`: Limit number of results
- `$skip`: Skip results for pagination
- `$count`: Include total count
- `$expand`: Expand related entities

Example:

```typescript
const response = await client.getRadioAmateurCallSigns({
  $select: "ID,CallSign",
  $filter: "contains(CallSign, 'OH')",
  $orderby: "CallSign asc",
  $top: 50,
});
```

## TypeScript Support

The SDK is written in TypeScript and provides full type definitions for all API responses:

```typescript
import { TelecomCompanyIdentifier, BroadbandProject } from "traficom-node";

const getCompanyProjects = async (
  companyName: string,
): Promise<BroadbandProject[]> => {
  try {
    const { value: projects } = await client.getBroadbandProjects({
      $filter: `OperatorName eq '${encodeURIComponent(companyName)}'`,
    });
    return projects;
  } catch (error) {
    console.error("Error:", error);
  }
};
```

## Contributing

Contributions are welcome! Please check our contributing guidelines for details.

## Changelog

See [CHANGELOG.md](./CHANGELOG.md) for a list of changes and upgrade notes.

## Development

### Setup

```bash
git clone https://github.com/villeve/traficom-node.git
cd traficom-node
npm install
```

### Building

```bash
npm run build
```

### Running Tests

```bash
npm test
```

## Support

- Create an [issue](https://github.com/villeve/traficom-node/issues)

## Roadmap

- [ ] Write unit tests
- [ ] Enhance type coverage

## Acknowledgments

- Thanks to Traficom for providing the API
- All the [contributors](https://github.com/villeve/traficom-node/graphs/contributors)

## License

MIT License - feel free to use this SDK in your projects.

## API Reference

Full API documentation is available at:

- [Traficom API Documentation](https://opendata.traficom.fi) - Official Traficom API reference

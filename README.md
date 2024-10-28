[![CI/CD](https://github.com/villeve/traficom-node/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/villeve/traficom-node/actions/workflows/ci-cd.yml)
[![npm version](https://badge.fury.io/js/traficom-node.svg)](https://badge.fury.io/js/traficom-node)

# Traficom Node.js SDK

This is an open-source Node.js SDK for the Traficom API, providing easy access to various Traficom data endpoints.

## Installation

Install the package using npm:

```bash
npm install traficom-node
```

Or using yarn:

```bash
yarn add traficom-node
```

## Usage

First, import and initialize the client:

```typescript
import { createClient } from "traficom-node";
const client = createClient();
```

You can optionally provide a custom base URL:

```typescript
const client = createClient("https://custom.traficom.fi");
```

### TETRA Mobile Network Codes

Fetch all TETRA mobile network codes:

```typescript
const tetraCodes = await client.getTETRAMobileNetworkCodes();
console.log(tetraCodes);
```

Fetch a specific TETRA mobile network code by ID:

```typescript
const tetraCode = await client.getTETRAMobileNetworkCodeById(1);
console.log(tetraCode);
```

### Aircraft Registers

Fetch all aircraft registers:

```typescript
const aircraftRegisters = await client.getAircraftRegister();
console.log(aircraftRegisters);
```

Fetch a specific aircraft register by ID:

```typescript
const aircraftRegister = await client.getAircraftRegisterById(1);
console.log(aircraftRegister);
```

## Examples

For more detailed usage examples, please check the `examples` directory in this repository. It contains sample scripts demonstrating various use cases:

- `examples/tetra-mobile-network-codes.ts`: Examples of fetching TETRA mobile network codes.
- `examples/aircraft-registers.ts`: Examples of fetching aircraft registers.

To run these examples:

1. Clone this repository
2. Install dependencies: `npm install` or `yarn install`
3. Run an example: `npx ts-node examples/tetra-mobile-network-codes.ts`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

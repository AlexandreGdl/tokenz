# Tokenz - Node Application

Tokenz is a Node.js application that provides [brief description of what the application does].

## Getting Started

To get started with Tokenz, follow these steps:

1. Clone the repository: `git clone https://github.com/AlexandreGdl/Tokenz.git`
2. Navigate to the project directory: `cd Tokenz`

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- npm (Node Package Manager): npm is typically installed with Node.js
- yarn (Another Package Manager): yarn is used in most project and can be added from npm

### Installing Dependencies

To install the project's dependencies, run the following command:

```bash
yarn
```

### Environment Setup

1. Create a copy of the .env.local file and rename it to .env.

2. Open the .env file and fill in the required environment values.

### Available Scripts

#### `yarn build`

Builds the TypeScript code using the TypeScript compiler (tsc). This will generate the compiled JavaScript files in the `build` directory.

#### `yarn start`

Starts the application by running the compiled JavaScript code using Node.js. This script assumes that you have already run the `build` script.

#### `yarn dev`

Runs the application in development mode using Nodemon. This allows for automatic restarts whenever changes are made to the source code. This script is useful for development purposes.

#### Creator

Tokenz was created by **AlexandreGdl**
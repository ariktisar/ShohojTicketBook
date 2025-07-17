# Playwright Test Framework

This project is a test automation framework built using Playwright and TypeScript, designed for both UI and API testing. It incorporates best practices such as Page Object Model, configuration management, and utility functions to ensure scalable and adaptive testing.

## Project Structure

```
playwright-test-framework
├── src
│   ├── pages               # Contains Page Object classes for UI interactions
│   │   └── HomePage.ts     # HomePage class for Shohoz website interactions
│   ├── api                 # Contains API client for backend interactions
│   │   └── apiClient.ts     # ApiClient class for making API requests
│   ├── config              # Configuration settings for the framework
│   │   └── config.ts       # Configuration file with base URLs and constants
│   ├── utils               # Utility functions for various tasks
│   │   └── helpers.ts       # Helper functions for logging, screenshots, etc.
│   └── types               # TypeScript interfaces and types
│       └── index.ts        # Type definitions for Flight, BookingDetails, etc.
├── tests                   # Contains test specifications
│   ├── flightBooking.spec.ts # UI tests for booking flights
│   └── apiTests.spec.ts      # API tests for backend validation
├── playwright.config.ts     # Playwright configuration file
├── package.json             # npm configuration file with dependencies and scripts
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd playwright-test-framework
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running Tests

- To run UI tests:
  ```
  npx playwright test tests/flightBooking.spec.ts
  ```

- To run API tests:
  ```
  npx playwright test tests/apiTests.spec.ts
  ```

### Configuration

The configuration settings can be found in `src/config/config.ts`. You can modify the base URLs, timeouts, and other constants as needed.

### Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.

## CI/CD Integration

This framework can be integrated into CI/CD pipelines using tools like GitHub Actions, Jenkins, or CircleCI. Ensure that the necessary environment variables and configurations are set up in your CI/CD environment to run the tests successfully.
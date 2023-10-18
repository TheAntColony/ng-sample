# AC Angular Sample

## :warning: Note

> This code is extracted from a larger project and is intended strictly for demonstration purposes. It may not include all features, error-handling, or production-ready practices of the original codebase.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [State Management](#state-management)
- [Contributing](#contributing)
- [License](#license)



## Features

- State Management with NgRx
- Observable-based data streams with RxJS
- Modular architecture
- High-performance UI
- Memoized Selectors

## Technologies

- Angular 16
- NgRx 16
- RxJS 7
- TypeScript 5.x

## Prerequisites

- Node.js v16.x.x or above
- npm v6.x.x or above

## Getting Started

Clone the repository:

\`\`\`bash
git clone https://github.com/TheAntColony/ng-sample
\`\`\`

Navigate into the project directory:

\`\`\`bash
cd ng-sample
\`\`\`

Install the dependencies:

\`\`\`bash
npm install
\`\`\`

Run the development server:

\`\`\`bash
ng serve
\`\`\`

Open [http://localhost:4200](http://localhost:4200) in your browser.

## Usage

This section can include examples of different routes, features, and state management capabilities.

## Folder Structure

- `src/app/core`: Core module (Singleton services and single-use components)
- `src/app/features`: Feature modules
- `src/app/shared`: Shared module (Common components, directives, and pipes)
- `src/app/state`: NgRx state (Actions, Reducers, Effects, Selectors)

## State Management

The application uses NgRx for state management and follows best practices for actions, reducers, effects, and selectors.

- Actions: Descriptive and responsible for state changes.
- Reducers: Pure functions that take the current state and an action, then return a new state.
- Effects: Handle side-effects such as API calls.
- Selectors: Efficiently select slices of state and can be composed together.

